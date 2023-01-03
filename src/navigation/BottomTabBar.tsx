import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Text,
    useTheme,
} from "@ui-kitten/components";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props: any) => <Icon {...props} name="camera-outline" />;

const SearchIcon = (props: any) => <Icon {...props} name="search-outline" />;

const HistoryIcon = (props: any) => <Icon {...props} name="list-outline" />;

interface Props {
    navigation: any;
    state: TabNavigationState<ParamListBase>;
}

const BottomTabBar = ({ navigation, state }: any) => {
    const theme = useTheme();
    return (
        <BottomNavigation
            style={{
                height: 50,
                marginBottom: 20,
            }}
            selectedIndex={state.index}
            onSelect={(index) => {
                navigation.navigate(state.routeNames[index]);
            }}
        >
            <BottomNavigationTab icon={HistoryIcon} title="Historique" />
            <BottomNavigationTab
                icon={HomeIcon}
                title={(evaProps) => <Text {...evaProps}>Scanner</Text>}
            />
            <BottomNavigationTab icon={SearchIcon} title="Rechercher" />
        </BottomNavigation>
    )
};

export default BottomTabBar;

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 15,
    },
});
