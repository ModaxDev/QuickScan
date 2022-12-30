import React from "react";
import Constants from "expo-constants";
import {Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import ProductDetailHeader from "../Product/ProductDetailHeader";
import HeaderSimple from "./HeaderSimple";

interface Props {
    children: React.ReactNode;
    style?: any;
    title?: any;
}

export const BaseSafeScreen = ({children, style, title = null}: Props) => {
    const insets = useSafeAreaInsets();
    return <SafeAreaProvider style={[styles.screen, style,{paddingTop: insets.top}]}>
        {title && <HeaderSimple title={title} />}
        <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.view, style]}>{children}</View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaProvider>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    view: {
        flex: 1
    }
});
