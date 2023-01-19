import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { App } from '../index';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../pages/HomePage/Features/Users/slice';

const renderer = createRenderer();
const initState = {
  users: initialState,
};
const mockStore = configureStore();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    const store = mockStore(initState);
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
