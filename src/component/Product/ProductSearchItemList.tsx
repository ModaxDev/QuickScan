import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import {IMAGE_URL} from "../../utils/env";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import moment from "moment/moment";
import React from "react";
import ProductStorage from "../../utils/Storage/ProductStorage";

type Props = {
    product: any;
    index: number;
    navigation: any;
}
const ProductSearchItemList = (props: Props) => {

    const handleOpenProduct = async () => {
        try {
            const ProductStorageItem: ProductStorageType = {
                name: props.product.name,
                createdAt: new Date(),
                company: props.product.company,
                barCodeNumber: props.product.barCodeNumber,
                fileUrl: props.product.fileUrl,
            }
            await ProductStorage.storeProduct(ProductStorageItem);
        } catch (e) {
            console.log(e);
        }
        props.navigation.navigate('Product', {product: props.product, history: true})
    }

    return (
        <TouchableHighlight
            underlayColor={'#f1f1f1'}
            onPress={() => handleOpenProduct()}
        >
            <View style={styles.container}>
                <Layout style={styles.itemContainer}>
                    <Image
                        style={{
                            resizeMode: "contain",
                            width: 80,
                            height: 80,
                            borderRadius: 5,
                        }}
                        source={{uri: IMAGE_URL + props.product.fileUrl}}
                    />
                    <Layout style={styles.textContainer}>
                        <Text style={{fontSize: 16}} category={"s1"}>{props.product.name}</Text>
                        <Text style={{fontSize: 15, paddingTop: 5}}>{props.product.company}</Text>
                    </Layout>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        color={"#595959"}
                        size={25}
                        style={{marginLeft: "auto"}}
                    />
                </Layout>
            </View>
        </TouchableHighlight>
    )
}

export default ProductSearchItemList

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#f1f1f1',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // align items to the left and right
        alignItems: 'center', // center items vertically
    },
    item: {
        padding: 10,
    },
    textContainer: {
        paddingLeft: 10,
    },
    containerDate: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

