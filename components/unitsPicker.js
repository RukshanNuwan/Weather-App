import React from 'react'
import {View} from 'react-native'

import {Picker} from '@react-native-community/picker';

export default function UnitsPicker(unitSystem, setUnitSystem) {

    return (
        <View>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)}>
                <Picker.Item label="℃" value="metric"/>
                <Picker.Item label="℉" value="imperial"/>
            </Picker>
        </View>
    );
}