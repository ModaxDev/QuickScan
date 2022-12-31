import {Alert, Dimensions, Image, StyleSheet} from "react-native";
import {Button, Icon, Layout, Text} from "@ui-kitten/components";
import React, {useEffect} from "react";
import * as Location from 'expo-location';
import * as WebBrowser from 'expo-web-browser';

const ProductRepair = ({product}: any) => {

    const openMapSearch = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Vous devez autoriser l\'application à accéder à votre position pour utiliser cette fonctionnalité');
            return;
        }
        const query = `reparation+${product.type.name}`;
        const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
        await WebBrowser.openBrowserAsync(url);
    };

    return (
        <Layout style={styles.container}>
            <Text category={"h6"}>Réparation</Text>
            <Layout style={styles.description}>
                <Button onPress={() => openMapSearch()} size={"large"} status={"basic"}>Voir où je peux réparer mon produit</Button>
            </Layout>
        </Layout>
    )
}

export default ProductRepair


const styles = StyleSheet.create({
        container: {
            margin: 20,
        },
        description: {
            paddingTop: 6,
        }
    })
;
