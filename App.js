import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';

import WeatherInfo from "./components/weatherInfo";
import UnitsPicker from "./components/unitsPicker";
import{colors} from "./utils/inedx";
import ReloadIcon from "./components/reloadIcon";

const WEATHER_API_KEY = 'cd914f43b33183306bca45809ad5439f';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const bgImage = require('./assets/background.jpg');

export default function App() {
    //Error Messsage
    const [errMsg, setErrMsg] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [unitSystem, setUnitSystem] = useState('metric');

    useEffect(() => {
        load();
    }, [unitSystem]);

    async function load() {
        setCurrentWeather(null);
        setErrMsg(null);

        try {
            // Require Permissions
            let {status} = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setErrMsg('Need Location Permissions')
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = location.coords;
            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`;
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
                <ImageBackground source={bgImage} style={styles.bgImage}>
                    <StatusBar style="auto" backgroundColor="#969696"/>
                    <View style={styles.main}>
                        <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}/>
                        <ReloadIcon load={load}/>
                        <WeatherInfo currentWeather={currentWeather}/>
                    </View>
                </ImageBackground>
            </View>
        );
    } else if (errMsg) {
        return (
            <View style={styles.container}>
                <Text>{errMsg}</Text>
                <StatusBar style="auto"/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.SECONDARY_COLOR}/>
                <StatusBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    main: {
        flex: 1,
        justifyContent: 'center'
    },

    bgImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    }
});
