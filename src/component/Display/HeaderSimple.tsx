import {useNavigation} from "@react-navigation/native";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Icon, Layout, Text} from "@ui-kitten/components";
import React from "react";

const HeaderSimple = ({ title }: any) => {
    return (
        <Layout style={styles.header}>
            <Text category="h5" style={styles.headerText}>{title}</Text>
        </Layout>
    );
};

export default HeaderSimple;

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        justifyContent: 'center', // align items to the left and right
        alignItems: 'center', // center items vertically
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    headerText: {
        textAlign: 'center', // center the text
    }
});
