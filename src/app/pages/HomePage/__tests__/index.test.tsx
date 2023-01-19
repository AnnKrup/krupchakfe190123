import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../Features/Users/slice';
import { HomePage } from '../index';

const renderer = createRenderer();
const initState = {
  users: initialState,
};
const mockStore = configureStore();

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const store = mockStore(initState);
    renderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
