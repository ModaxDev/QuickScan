import React from "react";
import {Layout, Text} from "@ui-kitten/components";

const ProductScreen = ({route, navigation}: any) => {

    const {product} = route.params;
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>{product.name}</Text>
        </Layout>
    )
}

export default ProductScreen
