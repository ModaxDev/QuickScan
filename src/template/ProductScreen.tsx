import React, {useEffect, useRef} from "react";
import {Icon, Layout, Menu, Text} from "@ui-kitten/components";
import {SafeScreen} from "../component/Display/SafeScreen";
import {View, StyleSheet, TouchableOpacity, Image, useWindowDimensions, Dimensions} from "react-native";
import {BlurView} from "expo-blur";
import {IMAGE_URL} from "../utils/env";
import ProductDetailHeader from "../component/Product/ProductDetailHeader";
import RenderHTML from "react-native-render-html";
import Constants from "expo-constants";
import ProductDetailHeaderInformation from "../component/Product/ProductDetailHeaderInformation";

const ProductScreen = ({route, navigation}: any) => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const {product} = route.params;
    const source = {
        html: product.description,
    };
    return (
        <SafeScreen>
            <ProductDetailHeader product={product}/>
            <View style={styles.globalContainer}>
                <ProductDetailHeaderInformation product={product}/>
                <Layout style={styles.container}>
                    <RenderHTML contentWidth={100}
                                source={source}/>
                </Layout>
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
            margin: 20,
        },
        description: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly', // align items to the left and right
        }
        ,
        image: {
            width: 80,
            height: 80,
            resizeMode: 'contain',
        }
        ,
        iconCompany: {
            width: 20,
            height: 20,
            resizeMode: 'contain',
        }
        ,
        descriptionText: {
            maxWidth: Dimensions.get('window').width - 120,
        },
        icon: {
            width: 30,
            height: 30,
        }
    })
;
