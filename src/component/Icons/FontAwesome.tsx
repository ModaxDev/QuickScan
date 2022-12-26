import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const FontAwesomeIconsPack = {
    name: 'material',
    icons: createIconsMap(),
};

function createIconsMap() {
    return new Proxy({}, {
        get(target, name) {
            return IconProvider(name);
        },
    });
}

const IconProvider = (name:any) => ({
    toReactElement: (props:any) => FontAwesomeIcon({ name, ...props }),
});

function FontAwesomeIcon({ name, style }:any) {
    const {height, tintColor, ...iconStyle} = StyleSheet.flatten(style);
    return (
        <Icon name={name} size={height} color={tintColor} style={iconStyle}/>
    );
}
