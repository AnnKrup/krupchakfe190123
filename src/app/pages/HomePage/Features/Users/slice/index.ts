import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { User, UsersState } from './types';

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers(state) {
      state.loading = true;
      state.error = null;
    },
    usersLoaded(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer } = slice;
