import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';


export default function App() {
  const persistor = persistStore(store);
  return (
      <PersistGate persistor={persistor}>
          <StoreProvider store={store}>
              <NavigationContainer>
                  {/* start here */}
              </NavigationContainer>
          </StoreProvider>
      </PersistGate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
