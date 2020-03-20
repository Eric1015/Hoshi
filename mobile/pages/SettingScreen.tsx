import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import i18n from '../localization/i18n';
import { sendGeolocation, sendPushNotificationToken } from '../api';

export default function SettingScreen(props) {
    const handleSendGeolocation = async () => {
        const notificationsRes = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (notificationsRes.status === 'granted') {
            const token = await Notifications.getExpoPushTokenAsync();
            sendPushNotificationToken({
                token,
            })
            const locationRes = await Permissions.askAsync(Permissions.LOCATION);
            if (locationRes.status === 'granted') {
                const location = await Location.getCurrentPositionAsync({});
                sendGeolocation({
                    token: token,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
            }
        }
    }

    useEffect(() => {
        handleSendGeolocation();
    }, []);

    return (
        <ImageBackground source={require('../assets/background.png')} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    center_text: {
        textAlign: 'center',
    },
})