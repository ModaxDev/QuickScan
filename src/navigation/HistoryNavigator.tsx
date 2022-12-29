import {createStackNavigator} from "@react-navigation/stack";
import ProductScreen from "../template/ProductScreen";
import React from "react";
import HistoryScreen from "../template/HistoryScreen";
import HistoryProductScreen from "../template/HistoryProductScreen";

const Stack = createStackNavigator();
const HistoryNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
        }}>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="History" component={HistoryScreen}/>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="Product" component={HistoryProductScreen}/>
        </Stack.Navigator>
    )
}

export default HistoryNavigator
