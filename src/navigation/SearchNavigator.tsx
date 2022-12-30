import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import HistoryProductScreen from "../template/HistoryProductScreen";
import SearchScreen from "../template/SearchScreen";

const Stack = createStackNavigator();
const SearchNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
        }}>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="Search" component={SearchScreen}/>
            <Stack.Screen options={{
                animationEnabled: true,
                headerShown: false,
            }} name="Product" component={HistoryProductScreen}/>
        </Stack.Navigator>
    )
}

export default SearchNavigator
