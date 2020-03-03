import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';
import SettingScreen from './pages/SettingScreen';

export default function App() {
	const persistor = persistStore(store);
	return (
		<PersistGate persistor={persistor}>
			<StoreProvider store={store}>
				<NavigationContainer>
					<SettingScreen />
				</NavigationContainer>
			</StoreProvider>
		</PersistGate>
	);
}
