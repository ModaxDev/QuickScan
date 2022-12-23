import React from "react";
import {Layout, Text} from "@ui-kitten/components";

const ProductScreen = ({route, navigation}: any) => {

    const {id} = route.params;
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>{id}</Text>
        </Layout>
    )
}

export default ProductScreen
