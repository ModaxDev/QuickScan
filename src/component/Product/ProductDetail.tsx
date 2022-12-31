import ProductDetailHeaderInformation from "./ProductDetailHeaderInformation";
import ProductDetailTag from "./ProductDetailTag";
import ProductDetailDescription from "./ProductDetailDescription";
import ProductDetailAccessory from "./ProductDetailAccessory";
import ProductDetailVideo from "./ProductDetailVideo";
import {StyleSheet, View} from "react-native";
import React from "react";

type ProductDetailProps = {
    product: any;
    categories: any;
    videosByCategoryState: any;
}


const ProductDetail = (props: ProductDetailProps) => {

    return (
        <View style={styles.globalContainer}>
            <ProductDetailHeaderInformation product={props.product}/>
            <ProductDetailTag product={props.product}/>
            <ProductDetailDescription product={props.product}/>
            <ProductDetailAccessory product={props.product}/>
            {props.categories && props.categories.map((category: any, index: any) => (
                <ProductDetailVideo key={index} keyProp={index} categoryName={category}
                                    product={props.videosByCategoryState ? props.videosByCategoryState[category] : []}/>
            ))}
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
        globalContainer: {
            flex: 1,
            marginBottom: 50,
        },
        container: {
            marginLeft: 20,
            textAlign: "center",
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
            backgroundColor: 'f1f1f1',

        },
    })
;
