import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as Location from 'expo-location';
import WeatherInfo from "./components/weatherInfo";

const WEATHER_API_KEY = 'cd914f43b33183306bca45809ad5439f';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
    //Error Messsage
    const [errMsg, setErrMsg] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [unitSystem, setUnitSystem] = useState('metric');

    useEffect(() => {
        load();
    }, []);

    async function load() {
        try {
            // Require Permissions
            let {status} = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setErrMsg('Need Location Permissions')
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = location.coords;
            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
            const response = await fetch(weatherUrl);
            const result = await response.json();

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
    if (currentWeather) {
        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <WeatherInfo currntWeather={currentWeather}/>
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
