import React, {useEffect, useState} from 'react';
import {Camera, FlashMode} from 'expo-camera';
import * as Haptics from 'expo-haptics';

import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {Button, Icon, Spinner} from "@ui-kitten/components"
import useApi from "../hooks/useApi";
import ProductRepository from "../repository/ProductRepository";
import ProductStorage from "../utils/Storage/ProductStorage";


const ScanScreen = ({navigation}: any) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [flashOn, setFlashOn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCameraPermission = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        };
        getCameraPermission();
    }, []);

    const handleBarCodeScanned = async ({type, data}: any) => {
        setIsLoading(true);
        setScanned(true);
        try {
            const response = await ProductRepository.findOneByCode(data);
            // Now you can use the response to navigate to the product page
            try {
                const ProductStorageItem: ProductStorageType = {
                    name: response.data.name,
                    createdAt: new Date(),
                    company: response.data.company,
                    barCodeNumber: response.data.barCodeNumber,
                    fileUrl: response.data.fileUrl,
                }
                await ProductStorage.storeProduct(ProductStorageItem);
            } catch (e) {
                console.log(e);
            }
            setFlashOn(false);
            navigation.navigate('Product', {product: response.data});
        } catch (error) {
            Alert.alert('Error', 'Une erreur est survenue lors de la récupération du produit ou celui-ci n\'existe pas');
        } finally {
            setIsLoading(false);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <Camera
                flashMode={flashOn ? FlashMode.torch : FlashMode.off}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.spinnerContainer}>
                {isLoading && <Spinner size='giant' status='primary'/>}
            </View>
            <View style={styles.scannerContainer}>
            </View>
            {scanned && (
                <View style={styles.margin}>
                    <Button onPress={() => setScanned(false)}>Tap to Scan Again</Button>
                </View>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    setFlashOn(!flashOn)
                    Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success
                    )
                }} style={[styles.button, {backgroundColor: flashOn ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.41)',}]}>
                    <Icon
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        fill={flashOn ? '#000' : '#fff'}
                        name="bulb-outline"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    margin: {
        marginTop: 140
    },
    spinnerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -150}, {translateY: -150}],
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',

    },
    scannerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -150}, {translateY: -150}],
        width: 300,
        height: 300,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000000',
    },
});


export default ScanScreen;

