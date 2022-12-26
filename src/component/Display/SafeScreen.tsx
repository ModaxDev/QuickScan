import React from "react";
import Constants from "expo-constants";
import {Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
    children: React.ReactNode;
    style?: any;
}

export const SafeScreen = ({children, style}: Props) => {
    const insets = useSafeAreaInsets();
    return <SafeAreaProvider style={[styles.screen, style]}>
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.view, style, {paddingTop: insets.top}]}>{children}</View>
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
