import React, {useEffect, useState} from "react";
import {SafeScreen} from "../component/Display/SafeScreen";
import {StyleSheet, View} from "react-native";
import ProductRepository from "../repository/ProductRepository";
import {Layout, Spinner} from "@ui-kitten/components";
import ProductDetail from "../component/Product/ProductDetail";

const HistoryProductScreen = ({route, navigation}: any) => {
    const {product} = route.params;
    const [productState, setProductState] = useState<any>();
    useEffect(() => {
        if (product) {
            ProductRepository.findOneByCode(product.barCodeNumber).then((res: any) => {
                setProductState(res.data);
            })
        }
    }, [product])

    const [videosByCategoryState, setVideosByCategoryState] = useState<{ [key: string]: any[] }>();
    useEffect(() => {
        if (productState != null) {
            const videosByCategory: { [key: string]: any[] } = {}
            productState.productVideos.forEach((item: any) => {
                const category = item.category;
                if (!videosByCategory[category]) {
                    videosByCategory[category] = [];
                }
                videosByCategory[category].push(item);
                setVideosByCategoryState(videosByCategory);
            });
        }
    }, [productState])

    const categories = productState && productState.productVideos && productState.productVideos.map((item: any) => item.category)
        .filter((category: string, index: number, self: string[]) => self.indexOf(category) === index);

    if (!productState) {
        return (
            <Layout style={styles.spinnerContainer}>
                <Spinner size='giant' status='primary'/>
            </Layout>
        )
    }

    return (
        <SafeScreen product={productState}>
            <ProductDetail product={productState} categories={categories} videosByCategoryState={videosByCategoryState}/>
        </SafeScreen>
    )
}

export default HistoryProductScreen

const styles = StyleSheet.create({
        spinnerContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{translateX: -150}, {translateY: -150}],
            width: 300,
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'f1f1f1',

        },
    })
;
