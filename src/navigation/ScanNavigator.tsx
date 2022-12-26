import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import ScanScreen from "../template/ScanScreen";
import ProductScreen from "../template/ProductScreen";

const Stack = createStackNavigator();
const ScanNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
        }}>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="Scan" component={ScanScreen}/>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="Product" component={ProductScreen}/>
        </Stack.Navigator>
    )
}

export default ScanNavigator
