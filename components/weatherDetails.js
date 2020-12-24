import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import {colors} from "../utils/inedx";

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

export default function WeatherDetails({currentWeather}) {
    const {
        main: {pressure, humidity, temp_min, temp_max},
        wind: {speed},
        clouds: {all}
    } = currentWeather;
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsBox}>
                {/*Pressure*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="cloudscale" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Atmospheric Pressure</Text>
                </View>
                <Text style={styles.pressure}>{pressure} hPa</Text>
            </View>
            <View style={styles.weatherDetailsBox}>
                {/*Humidity*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="water" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Humidity</Text>
                </View>
                <Text style={styles.humidity}>{humidity}%</Text>
            </View>
            <View style={styles.weatherDetailsBox}>
                {/*Min Temperature*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="temperature-low" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Minimum Temperature</Text>
                </View>
                <Text style={styles.tempMin}>{temp_min}°</Text>
            </View>
            <View style={styles.weatherDetailsBox}>
                {/*Max Temperature*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="temperature-high" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Maximum Temperature</Text>
                </View>
                <Text style={styles.tempMax}>{temp_max}°</Text>
            </View>
            <View style={styles.weatherDetailsBox}>
                {/*Wind Speed*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="wind" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Wind Speed</Text>
                </View>
                <Text style={styles.speed}>{speed} m/s</Text>
            </View>
            <View style={styles.weatherDetailsBox}>
                {/*Cloudiness*/}
                <View style={styles.detailsTitle}>
                    <FontAwesome5 name="cloud" size={20} color={SECONDARY_COLOR}/>
                    <Text style={styles.info}> Cloudiness</Text>
                </View>
                <Text style={styles.cloud}>{all}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherDetails: {
        margin: 5
    },

    weatherDetailsBox: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 3
    },

    info: {
        fontSize: 18,
        color: SECONDARY_COLOR
    },

    pressure: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    humidity: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    speed: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    cloud: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    tempMin: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    tempMax: {
        fontSize: 18,
        color: PRIMARY_COLOR
    },

    detailsTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});