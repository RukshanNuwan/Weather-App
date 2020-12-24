import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function WeatherInfo({currentWeather}) {
    // Get API information
    const {
        main: {temp, feels_like, pressure, humidity, temp_min, temp_max, sea_level, grnd_level},
        weather: [details],
        wind: {speed, deg, gust},
        clouds: {all},
        sys: {sunrise, sunset},
        name
    } = currentWeather;

    const {icon} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <View style={styles.weatherInfo}>
            <View style={styles.cityName}>

            </View>
            <Image source={{uri: iconUrl}} style={styles.weatherIcon}/>
            <Text>{temp}</Text>
            <Text>{feels_like}</Text>
            <Text>{pressure}</Text>
            <Text>{humidity}</Text>
            <Text>{temp_min}</Text>
            <Text>{temp_max}</Text>
            {/*<Text>{sea_level}</Text>*/}
            {/*<Text>{grnd_level}</Text>*/}
            <Text>{details.description}</Text>
            <Text>{speed}</Text>
            <Text>{deg}</Text>
            {/*<Text>{gust}</Text>*/}
            <Text>{all}</Text>
            <Text>{sunrise}</Text>
            <Text>{sunset}</Text>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },

    weatherIcon: {
        width: 100,
        height: 100
    },

    cityName: {}
});