import {Layout, List, Text} from "@ui-kitten/components";
import React, {useEffect} from "react";
import ProductStorage from "../utils/Storage/ProductStorage";
import {useIsFocused} from "@react-navigation/native";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from "react-native";
import ListItemSeparator from "../component/List/ListItemSeparator";
import {Swipeable} from "react-native-gesture-handler";
import ListItemDeleteAction from "../component/List/ListItemDeleteAction";
import {IMAGE_URL} from "../utils/env";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import moment from "moment/moment";
import ProductHistoryItemList from "../component/Product/ProductHistoryItemList";
import {BaseSafeScreen} from "../component/Display/BaseSafeScreen";


const HistoryScreen = ({navigation}:any) => {
    const isFocused = useIsFocused();
    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        const products = await ProductStorage.getProducts();
        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, [isFocused])

    return (

        <BaseSafeScreen title={"Historique"}>
            <View style={{flex:1}}>
                <FlatList
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                    data={products}
                    renderItem={({item, index}) => <ProductHistoryItemList navigation={navigation} onDeleted={() => getProducts()} index={index} product={item}/>}
                />
            </View>
        </BaseSafeScreen>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
