import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import {IMAGE_URL} from "../../utils/env";
import React from "react";

const ProductDetailTag = ({product}: any) => {


    return (
        <ScrollView>
            <Layout style={styles.text}><Text category={"h6"}>Tags</Text></Layout>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={product.productTags} renderItem={({item}: any) => {
                return (
                    <TouchableOpacity>
                        <View
                            style={styles.container}
                        >
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
                        </View>
                    </TouchableOpacity>
                )
            }}/>
        </ScrollView>
    )
}

    export default ProductDetailTag

    const styles = StyleSheet.create({
            container: {
                marginLeft: 20,
                textAlign: "center",
                backgroundColor: "#e0e0e0",
                borderRadius: 12,
            },
            text: {
                marginLeft: 20,
                paddingBottom: 6,
            }
        })
    ;
