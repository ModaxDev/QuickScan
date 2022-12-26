import RenderHTML from "react-native-render-html";
import {Layout, Text} from "@ui-kitten/components";
import React from "react";
import {Dimensions, StyleSheet} from "react-native";

const ProductDetailDescription = ({product}: any) => {

    const source = {
        html: product.description,
    };
    return (
        <Layout style={styles.container}>
            <Text category={"h6"}>Description</Text>
            <Layout style={styles.description}>
                <RenderHTML contentWidth={100}
                            source={source}/>
            </Layout>
        </Layout>
    )
}

export default ProductDetailDescription

const styles = StyleSheet.create({
        container: {
            margin: 20,
        },
        description: {
            paddingTop: 6,
        }
    })
;
