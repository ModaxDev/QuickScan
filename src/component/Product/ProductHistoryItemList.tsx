import ListItemDeleteAction from "../List/ListItemDeleteAction";
import {Alert, Image, StyleSheet, TouchableHighlight, View} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import {IMAGE_URL} from "../../utils/env";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import moment from "moment";
import {Swipeable} from "react-native-gesture-handler";
import React from "react";
import ProductStorage from "../../utils/Storage/ProductStorage";

type Props = {
    product: ProductStorageType;
    index: number;
    onDeleted: () => Promise<void>;

    navigation: any;
}

const ProductHistoryItemList = (props : Props) => {

    const handleDelete = async (index : number) => {
        try {
            await ProductStorage.deleteProduct(index);
            await props.onDeleted();
        }
        catch (e) {
            Alert.alert('Error', 'Une erreur est survenue lors de la suppression du produit');
        }
    }

    return (
        <Swipeable renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(props.index)}/>}>
            <TouchableHighlight
                underlayColor={'#f1f1f1'}
                onPress={() => props.navigation.navigate('Product', {product: props.product,history: true})}
            >
                <View style={styles.container}>
                    <Layout style={styles.itemContainer}>
                        <Image
                            style={{
                                resizeMode: "contain",
                                width: 80,
                                height: 80,
                                borderRadius: 5,
                            }}
                            source={{uri: IMAGE_URL + props.product.fileUrl}}
                        />
                        <Layout style={styles.textContainer}>
                            <Text style={{fontSize: 16}} category={"s1"}>{props.product.name}</Text>
                            <Text style={{fontSize: 15, paddingTop: 5}}>{props.product.company}</Text>
                            <Layout style={styles.containerDate}>
                                <MaterialCommunityIcons
                                    name="clock-outline"
                                    color={"#9a9a9a"}
                                    size={18}
                                />
                                <Text
                                    style={{fontSize: 13}}>{moment(new Date(props.product.createdAt)).fromNow()}</Text>
                            </Layout>
                        </Layout>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={"#595959"}
                            size={25}
                            style={{marginLeft: "auto"}}
                        />
                    </Layout>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ProductHistoryItemList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#f1f1f1',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // align items to the left and right
        alignItems: 'center', // center items vertically
    },
    item: {
        padding: 10,
    },
    textContainer: {
        paddingLeft: 10,
    },
    containerDate: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
