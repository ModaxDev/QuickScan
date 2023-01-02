import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeProduct = async (product: ProductStorageType) => {
    try {
        const existingProducts = await AsyncStorage.getItem('products');
        let products = existingProducts ? JSON.parse(existingProducts) : [];
        products = products.filter((p : any) => p.barCodeNumber !== product.barCodeNumber);
        products.push(product);
        await AsyncStorage.setItem('products', JSON.stringify(products));
    } catch (e) {
        Alert.alert('Erreur', 'Une erreur lors de l\'enregistrement du produit');
    }
}

const getProducts = async () => {
    try {
        const products = await AsyncStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    } catch (e) {
        Alert.alert('Erreur', 'Une erreur lors de la récupération des produits');
    }
}

const deleteAllProducts = async () => {
    try {
        await AsyncStorage.removeItem('products');
    } catch (e) {
        Alert.alert('Erreur', 'Une erreur lors de la suppression des produits');
    }
}

const deleteProduct = async (index: number) => {
    try {
        const products = await getProducts();
        products.splice(index, 1);
        await AsyncStorage.setItem('products', JSON.stringify(products));
    } catch (e) {
        Alert.alert('Erreur', 'Une erreur lors de la suppression du produit');
    }
}

export default {
    storeProduct,
    getProducts,
    deleteAllProducts,
    deleteProduct
}
