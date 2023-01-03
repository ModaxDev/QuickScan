import {Layout, List, Tab, TabBar, Text} from "@ui-kitten/components";
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
import HeaderSimple from "../component/Display/HeaderSimple";
import {useSafeAreaInsets} from "react-native-safe-area-context";


const HistoryScreen = ({navigation}: any) => {
    const isFocused = useIsFocused();
    const [products, setProducts] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const getProducts = async () => {
        const products = await ProductStorage.getProducts();
        setProducts(products);
    }

    useEffect(() => {
        getProducts();

    }, [isFocused])

    const productsFiltered = products.filter((product: ProductStorageType) => {
        if (selectedIndex === 0) {
            return !product.isFavorite
        }
        if (selectedIndex === 1) {
            return product.isFavorite;
        }
    }).sort((a: ProductStorageType, b: ProductStorageType) => moment(b.createdAt).diff(moment(a.createdAt)));


    const insets = useSafeAreaInsets();


    return (
        <View style={{flex: 1}}>
            <List
                ListHeaderComponent={() => <View style={{paddingTop: insets.top}}>
                    <HeaderSimple title={"Historique"}/>
                    <TabBar
                        indicatorStyle={styles.indicator}
                        style={styles.tabBar}
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}>
                        <Tab style={{paddingVertical: 7}}
                             title={(evaProps) => <Text category="s1"
                                                        style={selectedIndex == 0 ? styles.menuActive : styles.menuInActive}>Historique</Text>}
                        >
                            <View></View>
                        </Tab>
                        <Tab style={{borderLeftWidth: 1.5, marginVertical: 4, borderLeftColor: '#fff'}}
                             title={(evaProps) => <Text category="s1"
                                                        style={selectedIndex == 1 ? styles.menuActive : styles.menuInActive}>Favoris</Text>}
                        >
                            <View></View>
                        </Tab>
                    </TabBar>
                </View>}
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                data={productsFiltered}
                renderItem={({item, index}) => <ProductHistoryItemList navigation={navigation}
                                                                       onDeleted={() => getProducts()} index={index}
                                                                       product={item}/>}
            />
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingHorizontal: 10,

    },
    indicator: {
        backgroundColor: 'rgba(255,255,255,0)',
        position: 'absolute',
        bottom: 0,
        borderRadius: 0,
    },
    tabBar: {
        marginVertical: 20,
        backgroundColor: '#2a51a3',
        borderRadius: 5,
        marginHorizontal: 20
    },
    menuActive: {
        color: '#fff'
    },
    menuInActive: {
        color: '#9ccdf4'
    },
    coursesTitle: {
        margin: 10,
        marginBottom: 20,
    },
    image: {
        height: 120,
        width: 120,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: '20%'
    },
});
