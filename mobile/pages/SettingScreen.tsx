import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import i18n from '../localization/i18n';
import { sendGeolocation, sendPushNotificationToken } from '../api';

export default function SettingScreen(props) {
    const handleSendGeolocation = async () => {
        const locationRes = await Permissions.askAsync(Permissions.LOCATION);
        if (locationRes.status === 'granted') {
            const location = await Location.getCurrentPositionAsync({});
            sendGeolocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }
        const notificationsRes = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (notificationsRes.status === 'granted') {
            const token = await Notifications.getExpoPushTokenAsync();
            sendPushNotificationToken({
                token,
            })
        }
    }

    useEffect(() => {
        handleSendGeolocation();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.center_text}>{i18n.t('welcome_to_hoshi')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center_text: {
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})