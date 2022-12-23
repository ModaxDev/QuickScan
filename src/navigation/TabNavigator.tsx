import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScanScreen from "../template/ScanScreen";
import BottomTabBar from "./BottomTabBar";
import AccountScreen from "../template/AccountScreen";
import ProductScreen from "../template/ProductScreen";
import ScanNavigator from "./ScanNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen
            options={{
                headerShown: false,
            }}
            name="ScanTab"
            component={ScanNavigator}
        />
        <Screen name="ACCOUNT" component={AccountScreen} />
    </Navigator>
);

export default TabNavigator;
