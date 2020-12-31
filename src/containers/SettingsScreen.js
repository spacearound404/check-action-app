import React from 'react';
import { View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';

const SettingsScreen = () => {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>Settings</Text>
        </Layout>
    );
}

export default SettingsScreen;
