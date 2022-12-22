import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import TabNavigator from "./TabNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigator;
