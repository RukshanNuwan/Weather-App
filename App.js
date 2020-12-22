import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as Location from 'expo-location';

const WEATHER_API_KEY = 'cd914f43b33183306bca45809ad5439f';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
    //Error Messsage
    const [errMsg, setErrMsg] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        try {
            // Require Permissions
            let {status} = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setErrMsg('Need Locations Permissions')
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = location.coords;
            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
            const response = await fetch(weatherUrl);
            const result = response.json();

            if (response.ok) {
                setCurrentWeather(result);
            } else {
                setErrMsg(result.message);
            }
        } catch (err) {
            setErrMsg(err.message);
        }
    }

    // Check the current weather is true. If current weather is true then return the View
    console.log(currentWeather);
    if (currentWeather) {
        const {main: {temp}} = currentWeather;

        return (
            <View style={styles.container}>
                <Text>{temp}</Text>
                <StatusBar style="auto"/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>{errMsg}</Text>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
