import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {colors} from '../utils/inedx';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function UnitsPicker({unitSystem, setUnitSystem}) {

    return (
        <View style={styles.unitSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)} style={styles.picker} mode="dropdown">
                <Picker.Item label="℃" value="metric"/>
                <Picker.Item label="℉" value="imperial"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    unitSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20
            },
            android: {
                top: 50
            }
        }),
        left: 10,
        height: 50,
        width: 100
    },

    picker: {
        color: PRIMARY_COLOR
    }
})