import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors} from '../utils/inedx';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function WeatherInfo({currentWeather}) {
    // Get API information
    const {
        main: {temp, feels_like, pressure, humidity, temp_min, temp_max},
        weather: [details],
        wind: {speed},
        clouds: {all},
        name
    } = currentWeather;

    const {icon, description, main} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <View style={styles.weatherInfo}>
            <View>
                {/*City Name*/}
                <Text style={styles.cityName}>{name}</Text>
            </View>

            {/*Icon*/}
            <Image source={{uri: iconUrl}} style={styles.weatherIcon}/>
            {/*Temperature*/}
            <Text style={styles.temp}>{temp}°</Text>
            {/*Feels Like Temperature*/}
            <Text style={styles.feelsLike}>{feels_like}°</Text>
            {/*Pressure*/}
            <Text style={styles.pressure}>{pressure} hPa</Text>
            {/*Humidity*/}
            <Text style={styles.humidity}>{humidity}%</Text>
            {/*Min Temperature*/}
            <Text style={styles.tempMin}>{temp_min}°</Text>
            {/*Max Temperature*/}
            <Text style={styles.tempMax}>{temp_max}°</Text>
            {/*Main Weather Status*/}
            <Text style={styles.main}>{main}</Text>
            {/*Weather Description*/}
            <Text style={styles.description}>{description}</Text>
            {/*Wind Speed*/}
            <Text style={styles.speed}>{speed} m/s</Text>
            {/*Cloud Cover*/}
            <Text style={styles.cloud}>{all}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    },

    cityName: {
        fontSize: 40,
        color: PRIMARY_COLOR
    },

    temp: {
        fontSize: 60,
        color: PRIMARY_COLOR
    },

    weatherIcon: {
        width: 100,
        height: 100
    },

    feelsLike: {
        color: PRIMARY_COLOR
    },

    tempMin: {
        color: PRIMARY_COLOR
    },

    tempMax: {
        color: PRIMARY_COLOR
    },

    pressure: {
        color: PRIMARY_COLOR
    },

    humidity: {
        color: PRIMARY_COLOR
    },

    speed: {
        color: PRIMARY_COLOR
    },

    main: {
        textTransform: 'uppercase',
        color: PRIMARY_COLOR,
        fontWeight: 'bold'
    },

    description: {
        textTransform: 'capitalize',
        color: PRIMARY_COLOR
    },

    cloud: {
        color: PRIMARY_COLOR
    }
});