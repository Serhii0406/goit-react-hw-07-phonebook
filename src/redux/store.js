import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { ContactsReducer } from './contactsSlice';
import { FiltersReducer } from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedContactReducer = persistReducer(persistConfig, ContactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: FiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);