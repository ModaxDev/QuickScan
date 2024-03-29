import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ScanScreen from "../template/ScanScreen";
import BottomTabBar from "./BottomTabBar";
import AccountScreen from "../template/SearchScreen";
import ProductScreen from "../template/ProductScreen";
import ScanNavigator from "./ScanNavigator";
import HistoryScreen from "../template/HistoryScreen";
import SearchScreen from "../template/SearchScreen";
import HistoryNavigator from "./HistoryNavigator";
import SearchNavigator from "./SearchNavigator";

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
            <Screen name="Historique" options={{headerShown: false}} component={HistoryNavigator}/>
            <Screen
                options={{
                    headerShown: false,
                }}
                name="ScanTab"
                component={ScanNavigator}
            />
            <Screen name="SearchNav" options={{
                headerShown: false,
            }} component={SearchNavigator}/>
        </Navigator>
    )
};

export default TabNavigator;
