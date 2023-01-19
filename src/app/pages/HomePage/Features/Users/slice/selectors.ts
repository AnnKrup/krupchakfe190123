import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './index';

const selectDomain = (state: RootState) => state.users || initialState;

export const selectUsers = createSelector(
  [selectDomain],
  usersState => usersState.users,
);

export const selectUser = (id: string) =>
  createSelector([selectDomain], usersState =>
    usersState.users.find(user => user.nickname === id),
  );
