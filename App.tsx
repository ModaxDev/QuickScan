import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import ScanScreen from "./src/template/ScanScreen";
import AppNavigator from "./src/navigation/AppNavigator";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {default as theme} from "./theme.json";
import { default as mapping } from './mapping.json';


export default () => (
    <>
        <IconRegistry icons={[EvaIconsPack]}/>
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <AppNavigator/>
        </ApplicationProvider>
    </>
);
