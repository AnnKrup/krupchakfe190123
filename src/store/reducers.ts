/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { reducer as usersReducer } from '../app/pages/HomePage/Features/Users/slice';

export const rootReducer = {
  users: usersReducer,
};
