import {useNavigation} from "@react-navigation/native";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Icon, Layout, Text} from "@ui-kitten/components";
import React from "react";

const ProductDetailHeader = ({ product }: any) => {
    const navigation = useNavigation();
    return (
        <Layout style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    style={{
                        width: 35,
                        height: 35,
                    }}
                    fill={"#595959"}
                    name="arrow-back-outline"
                />
            </TouchableOpacity>
            <Text category="h6" style={styles.headerText}>{product.name}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                <Icon
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    fill={"#595959"}
                    name="heart-outline"
                />
            </TouchableOpacity>
        </Layout>
    );
};

export default ProductDetailHeader;

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between', // align items to the left and right
        alignItems: 'center', // center items vertically
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    headerText: {
        textAlign: 'center', // center the text
    }
});
