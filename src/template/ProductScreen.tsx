import React, {useEffect, useState} from "react";
import {SafeScreen} from "../component/Display/SafeScreen";
import ProductDetail from "../component/Product/ProductDetail";

const ProductScreen = ({route, navigation}: any) => {
    const {product} = route.params;
    const [videosByCategoryState, setVideosByCategoryState] = useState<{ [key: string]: any[] }>();
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
            <ProductDetail product={product} categories={categories} videosByCategoryState={videosByCategoryState}/>
        </SafeScreen>
    )
}


export default ProductScreen
