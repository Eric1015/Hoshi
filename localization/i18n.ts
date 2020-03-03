import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { Platform } from 'react-native';

import ja from './ja.json';
import en from './en.json';

async function setup() {
    i18n.fallbacks = true;
    i18n.translations = { ja, en };
    if (Platform.OS === 'ios') {
        i18n.locale = Localization.locale;
    } else {
        const { locale }  = await Localization.getLocalizationAsync();
        i18n.locale = locale;
    }
}

setup();

export default i18n;