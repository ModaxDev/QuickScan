import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import ScanScreen from "./src/template/ScanScreen";
import AppNavigator from "./src/navigation/AppNavigator";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {default as theme} from "./theme.json";


const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>HOME 2</Text>
    </Layout>
);

export default () => (
    <>
        <IconRegistry icons={[EvaIconsPack]}/>
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <AppNavigator/>
        </ApplicationProvider>
    </>
);
