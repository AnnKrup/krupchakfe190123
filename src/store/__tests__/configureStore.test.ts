import { configureAppStore } from '../configureStore';
import { initialState } from '../../app/pages/HomePage/Features/Users/slice';

describe('configureStore', () => {
  it('should return initial', () => {
    const store = configureAppStore();
    expect(store.getState()).toEqual({ users: initialState });
  });
});
