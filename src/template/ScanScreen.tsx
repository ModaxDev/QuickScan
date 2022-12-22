import {useEffect, useState} from "react";
import {BarCodeScanner} from "expo-barcode-scanner";
import {Button, Layout, Text} from '@ui-kitten/components';
import {View,StyleSheet} from "react-native";


const ScanScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View  style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.scannerContainer}>
            </View>
            {scanned && (
                <View style={styles.margin}><Button onPress={() => setScanned(false)}>Tap to Scan Again</Button></View>

            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    margin: {
        marginTop: 140
    },
    scannerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -150 }, { translateY: -150 }],
        width: 300,
        height: 300,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
});


export default ScanScreen;

