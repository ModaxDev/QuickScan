import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SearchBar = ({ onChange } : any) => {
    const { colors } = useTheme();
    return (
        <View
            style={styles.view}
        >
            <MaterialCommunityIcons name="magnify" size={20} color="#777777" />
            <TextInput
                style={{
                    marginLeft: 12,
                    fontSize: 16,
                    lineHeight: 22,
                    color: colors.primary,
                }}
                onChangeText={onChange}
                placeholderTextColor="#777777"
                placeholder="Rechercher un produit"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        marginHorizontal: 20,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor:  "#f1f1f1",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default SearchBar;
