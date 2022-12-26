import React, {useEffect, useRef} from "react";
import {Icon, Layout, Text} from "@ui-kitten/components";
import {SafeScreen} from "../component/Display/SafeScreen";
import {View, StyleSheet, TouchableOpacity,} from "react-native";
import {BlurView} from "expo-blur";
import {IMAGE_URL} from "../utils/env";
import * as Haptics from "expo-haptics";
import Constants from "expo-constants";
import ProductDetailHeader from "../component/Product/ProductDetailHeader";

const ProductScreen = ({route, navigation}: any) => {

    const {product} = route.params;
    return (
        <SafeScreen>
            <ProductDetailHeader product={product}/>
            <View style={styles.globalContainer}>

            </View>
        </SafeScreen>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
    },
});
