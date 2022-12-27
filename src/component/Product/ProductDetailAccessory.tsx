import {Layout, Text} from "@ui-kitten/components";
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {IMAGE_URL} from "../../utils/env";
import React from "react";

const ProductDetailAccessory = ({product} : any) => {

    return (
        <ScrollView>
            <Layout style={styles.text}><Text category={"h6"}>Accéssoires / Gadgets</Text></Layout>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={product.productAccessories} renderItem={({item}: any) => {
                return (
                    <TouchableOpacity
                        style={styles.container}
                    >
                        <Image
                            style={{
                                resizeMode: "contain",
                                width: 90,
                                height: 90,
                                borderRadius: 5,
                                backgroundColor: "#E5E5E5",
                            }}
                            source={{ uri: IMAGE_URL + item.fileUrl }}
                        />
                        <View
                            style={{
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: "#333",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }}/>
        </ScrollView>
    )
}

export default ProductDetailAccessory

const styles = StyleSheet.create({
        container: {
            marginLeft: 20,
            textAlign: "center",
        },
    text: {
        marginLeft: 20,
        paddingBottom: 6,
    }
    })
;
