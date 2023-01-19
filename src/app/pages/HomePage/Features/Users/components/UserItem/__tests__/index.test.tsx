import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { UserItem } from '../index';
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
  chooseUser: () => {},
};

describe('<UserItem />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<UserItem {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('check image', () => {
    const { getByAltText } = render(<UserItem {...props} />);
    getByAltText(`user ${props.user.name}`);
  });

  it('choose user fires', () => {
    const chooseUser = jest.fn();
    const { getByText } = render(
      <UserItem {...props} chooseUser={chooseUser} />,
    );
    const button = getByText(`View`);

    fireEvent.click(button);

    expect(chooseUser).toHaveBeenCalled();
  });
});
