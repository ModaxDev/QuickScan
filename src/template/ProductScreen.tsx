import React from "react";
import {Icon, Layout, Menu, Text} from "@ui-kitten/components";
import {SafeScreen} from "../component/Display/SafeScreen";
import {View, StyleSheet} from "react-native";
import ProductDetailHeader from "../component/Product/ProductDetailHeader";
import ProductDetailHeaderInformation from "../component/Product/ProductDetailHeaderInformation";
import ProductDetailDescription from "../component/Product/ProductDetailDescription";

const ProductScreen = ({route, navigation}: any) => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const {product} = route.params;
    return (
        <SafeScreen>
            <ProductDetailHeader product={product}/>
            <View style={styles.globalContainer}>
                <ProductDetailHeaderInformation product={product}/>
                <ProductDetailDescription product={product}/>
            </View>
        </SafeScreen>
    )
}


export default ProductScreen

const styles = StyleSheet.create({
        globalContainer: {
            flex: 1,
        },
    })
;
