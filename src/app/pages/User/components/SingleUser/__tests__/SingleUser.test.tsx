import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { SingleUser } from '../SingleUser';
import { fireEvent, render } from '@testing-library/react';

const renderer = createRenderer();

const props = {
  user: {
    phone: '902-782-3286',
    name: 'Brazil Izair',
    nickname: '@brazilizair',
    email: 'brazil.izair@fallinhay.com',
    position: 'Managing Director',
    photo: '2.jpg',
  },
  goBack: () => {},
};

describe('<UserItem />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<SingleUser {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('check image', () => {
    const { getByAltText } = render(<SingleUser {...props} />);
    getByAltText(`user ${props.user.name}`);
  });

  it('check user info', () => {
    const { getByTestId } = render(<SingleUser {...props} />);
    const name = getByTestId('name').textContent;
    const position = getByTestId('position').textContent;

    expect(name).toBe(props.user.name);
    expect(position).toBe(props.user.position);
  });

  it('choose goBack fires', () => {
    const goBack = jest.fn();
    const { getByTestId } = render(<SingleUser {...props} goBack={goBack} />);
    const button = getByTestId('backButton');

    fireEvent.click(button);

    expect(goBack).toHaveBeenCalled();
  });
});
