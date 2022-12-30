import {Layout, Text} from "@ui-kitten/components";
import React, {useEffect, useState} from "react";
import SearchBar from "../component/Search/SearchBar";
import ProductRepository from "../repository/ProductRepository";
import ProductHistoryItemList from "../component/Product/ProductHistoryItemList";
import {FlatList, StyleSheet, View} from "react-native";
import ProductSearchItemList from "../component/Product/ProductSearchItemList";
import {BaseSafeScreen} from "../component/Display/BaseSafeScreen";
import HeaderSimple from "../component/Display/HeaderSimple";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const SearchScreen = ({navigation}: any) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
            ProductRepository.findByName(search).then((res: any) => {
                setProducts(res.data["hydra:member"]);
            })
    }, [search])
    const insets = useSafeAreaInsets();

    return (
            <Layout style={{flex: 1}}>
                <Layout style={{marginTop: insets.top, marginBottom: 5}}>
                    <SearchBar onChange={(text: string) => setSearch(text)}/>
                </Layout>
                <FlatList
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                    data={products}
                    renderItem={({item, index}) => <ProductSearchItemList navigation={navigation} index={index} product={item}/>}
                />
            </Layout>
    )
}

export default SearchScreen


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

