import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import i18n from '../localization/i18n';

export default function SettingScreen(props) {
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