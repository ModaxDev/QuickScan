import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import ScanScreen from "./src/template/ScanScreen";

const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME 2</Text>
    </Layout>
);

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
     <ScanScreen />
    </ApplicationProvider>
);
