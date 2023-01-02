import {useNavigation} from "@react-navigation/native";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {Icon, Layout, Text} from "@ui-kitten/components";
import React, {useState} from "react";
import ProductStorage from "../../utils/Storage/ProductStorage";

const ProductDetailHeader = ({ product }: any) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();
    const ProductStorageItem: ProductStorageType = {
        name: product.name,
        createdAt: new Date(),
        company: product.company,
        barCodeNumber: product.barCodeNumber,
        fileUrl: product.fileUrl,
        isFavorite: true,
    }

    const handleFavorite = async () => {
        setIsFavorite(true);
        try {
            const ProductStorageItemAdd: ProductStorageType = {
                name: product.name,
                createdAt: new Date(),
                company: product.company,
                barCodeNumber: product.barCodeNumber,
                fileUrl: product.fileUrl,
                isFavorite: true,
            }
            await ProductStorage.storeProduct(ProductStorageItemAdd);
        } catch (e) {
           Alert.alert("Erreur", "Erreur lors de l'enregistrement du produit dans les favoris");
        }
    }

    const handleRemoveFavorite = async () => {
        setIsFavorite(false);
        try {
            const ProductStorageItemRemove: ProductStorageType = {
                name: product.name,
                createdAt: new Date(),
                company: product.company,
                barCodeNumber: product.barCodeNumber,
                fileUrl: product.fileUrl,
                isFavorite: false,
            }
            await ProductStorage.changeProductFavorite(ProductStorageItemRemove);
        } catch (e) {
           Alert.alert("Erreur", "Erreur lors de la suppression du produit des favoris");
        }
    }

    ProductStorage.isProductFavorite(ProductStorageItem).then((data) => {
        setIsFavorite(data);
    });

    return (
        <Layout style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    style={{
                        width: 35,
                        height: 35,
                    }}
                    fill={"#595959"}
                    name="arrow-back-outline"
                />
            </TouchableOpacity>
            <Text category="h6" style={styles.headerText}>{product.name}</Text>
            <TouchableOpacity onPress={isFavorite ? handleRemoveFavorite : handleFavorite} style={{ alignSelf: 'center' }}>
                <Icon
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    fill={isFavorite ? "#de2a2a": "#595959"}
                    name="heart-outline"
                />
            </TouchableOpacity>
        </Layout>
    );
};

export default ProductDetailHeader;

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between', // align items to the left and right
        alignItems: 'center', // center items vertically
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    headerText: {
        textAlign: 'center', // center the text
    }
});
