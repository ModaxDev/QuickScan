import React from "react";
import {Icon, Layout, Menu, Text} from "@ui-kitten/components";
import {SafeScreen} from "../component/Display/SafeScreen";
import {View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";
import ProductDetailHeader from "../component/Product/ProductDetailHeader";
import ProductDetailHeaderInformation from "../component/Product/ProductDetailHeaderInformation";
import ProductDetailDescription from "../component/Product/ProductDetailDescription";
import {IMAGE_URL} from "../utils/env";
import ProductDetailAccessory from "../component/Product/ProductDetailAccessory";
import ProductDetailVideo from "../component/Product/ProductDetailVideo";
import YoutubePlayer from "react-native-youtube-iframe";

const ProductScreen = ({route, navigation}: any) => {
    const {product} = route.params;
    return (
        <SafeScreen product={product}>
            <View style={styles.globalContainer}>
                <ProductDetailHeaderInformation product={product}/>
                <ProductDetailDescription product={product}/>
                <ProductDetailAccessory product={product}/>
                <ProductDetailVideo product={product}/>
            </View>
        </SafeScreen>
    )
}


export default ProductScreen

const styles = StyleSheet.create({
        globalContainer: {
            flex: 1,
        },
        container: {
            marginLeft: 20,
            textAlign: "center",
        },
    })
;
