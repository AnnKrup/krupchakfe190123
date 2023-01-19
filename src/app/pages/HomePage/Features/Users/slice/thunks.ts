import { actions } from './index';
import { User } from './types';

const loadLocalJSONUsers = () =>
  fetch('initData.json').then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  });

export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch(actions.loadUsers());

      const data = await loadLocalJSONUsers();

      dispatch(actions.usersLoaded(data as User[]));
    } catch (err) {
      console.log(err);
      dispatch(actions.repoError(true));
    }
  };
};
