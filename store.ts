import { createStore, createTypedHooks } from "easy-peasy";
import { persistReducer } from 'redux-persist';

import model, { StoreModel } from "./model";
import { AsyncStorage } from "react-native";

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch };

const store = createStore(model,
    {
        reducerEnhancer: reducer => persistReducer(
            {
                key: 'Tweet-Scheduler',
                storage: AsyncStorage,
                whitelist: ['user'],
            },
            reducer,
        ),
    }
);

export default store;