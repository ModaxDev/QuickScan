import React, {useEffect} from "react";
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
    const [videosByCategoryState, setVideosByCategoryState] = React.useState<{ [key: string]: any[] }>();
    useEffect(() => {
        if (product != null) {
            const videosByCategory: { [key: string]: any[] } = {}
            product.productVideos.forEach((item: any) => {
                const category = item.category;
                if (!videosByCategory[category]) {
                    videosByCategory[category] = [];
                }
                videosByCategory[category].push(item);
                setVideosByCategoryState(videosByCategory);
            });
        }
    }, [product])

    const categories = product.productVideos.map((item: any) => item.category)
        .filter((category: string, index: number, self: string[]) => self.indexOf(category) === index);
    return (
        <SafeScreen product={product}>
            <View style={styles.globalContainer}>
                <ProductDetailHeaderInformation product={product}/>
                <ProductDetailDescription product={product}/>
                <ProductDetailAccessory product={product}/>
                {categories.map((category : any, index : any) => (
                    <ProductDetailVideo categoryName={category} product={videosByCategoryState ? videosByCategoryState[category] : []}/>
                ))}
            </View>
        </SafeScreen>
    )
}


export default ProductScreen

const styles = StyleSheet.create({
        globalContainer: {
            flex: 1,
            marginBottom: 50,
        },
        container: {
            marginLeft: 20,
            textAlign: "center",
        },
    })
;
