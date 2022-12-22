import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Text,
} from "@ui-kitten/components";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props: any) => <Icon {...props} name="home" />;

const SearchIcon = (props: any) => <Icon {...props} name="search-outline" />;

const RadarIcon = (props: any) => (
    <Icon {...props} name="navigation-2-outline" />
);

const LikedIcon = (props: any) => <Icon {...props} name="heart-outline" />;

const AccountIcon = (props: any) => <Icon {...props} name="person-outline" />;

interface Props {
    navigation: any;
    state: TabNavigationState<ParamListBase>;
}

const BottomTabBar = ({ navigation, state }: any) => (
    <BottomNavigation
        style={{
            height: 70,
        }}
        selectedIndex={state.index}
        onSelect={(index) => {
            navigation.navigate(state.routeNames[index]);
        }}
    >
        <BottomNavigationTab
            icon={HomeIcon}
            title={(evaProps) => <Text {...evaProps}>SCAN</Text>}
        />

        <BottomNavigationTab icon={LikedIcon} title="PRODUCT" />
        <BottomNavigationTab icon={AccountIcon} title="ACCOUNT" />
    </BottomNavigation>
);

export default BottomTabBar;

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 15,
    },
});
