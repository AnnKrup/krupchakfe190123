import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

export function configureAppStore() {
  const middlewares = [thunk];

  return configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
  });
}
