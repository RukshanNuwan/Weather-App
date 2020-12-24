import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import {colors} from '../utils/inedx';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function WeatherInfo({currentWeather}) {
    // Get API information
    const {
        name,
        main: {temp, feels_like},
        weather: [details]
    } = currentWeather;

    const {icon, description, main} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <View style={styles.weatherInfo}>
            {/*City Name*/}
            <View style={styles.detailsTitle}>
                <FontAwesome5 name="map-marker-alt" size={55} color={SECONDARY_COLOR}/>
                <Text style={styles.cityName}> {name}</Text>
            </View>
            <View style={styles.mainRow}>
                {/*Temperature*/}
                <Text style={styles.temp}> {temp}°</Text>
                {/*Icon*/}
                <Image source={{uri: iconUrl}} style={styles.weatherIcon}/>
            </View>
            <View style={styles.otherDetails}>
                {/*Feels Like Temperature*/}
                <View>
                    <Text style={styles.info}>Feels Like</Text>
                    <Text style={styles.feelsLike}>{feels_like}°</Text>
                </View>
                <View>
                    {/*Main Weather Status*/}
                    <Text style={styles.main}>{main}</Text>
                    {/*Weather Description*/}
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherInfo: {
        marginLeft: 10
    },

    mainRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    otherDetails: {
        marginLeft: 3,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cityName: {
        fontSize: 60,
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

    main: {
        textTransform: 'capitalize',
        color: PRIMARY_COLOR,
        fontSize: 30,
        fontWeight: 'bold'
    },

    description: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: PRIMARY_COLOR
    },

    feelsLike: {
        fontSize: 30,
        color: PRIMARY_COLOR
    },

    info: {
        fontSize: 25,
        color: SECONDARY_COLOR
    },

    detailsTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});