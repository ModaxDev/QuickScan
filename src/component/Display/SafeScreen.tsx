import React from "react";
import Constants from "expo-constants";
import {Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import ProductDetailHeader from "../Product/ProductDetailHeader";

interface Props {
    children: React.ReactNode;
    style?: any;
    product?: any;
}

export const SafeScreen = ({children, style, product = null}: Props) => {
    const insets = useSafeAreaInsets();
    return <SafeAreaProvider style={[styles.screen, style,{paddingTop: insets.top}]}>
        {product && <ProductDetailHeader product={product}/>}
        <ScrollView>
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
