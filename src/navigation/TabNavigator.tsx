import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScanScreen from "../template/ScanScreen";
import BottomTabBar from "./BottomTabBar";
import AccountScreen from "../template/AccountScreen";
import ProductScreen from "../template/ProductScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen
            options={{
                headerShown: false,
            }}
            name="SCAN"
            component={ScanScreen}
        />

        <Screen name="PRODUCT" component={ProductScreen} />
        <Screen name="ACCOUNT" component={AccountScreen} />
    </Navigator>
);

export default TabNavigator;
