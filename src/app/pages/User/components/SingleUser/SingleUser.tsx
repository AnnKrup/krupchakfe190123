import * as React from 'react';
import { User } from '../../../HomePage/Features/Users/slice/types';
import { FC } from 'react';

type Props = {
  user: User;
  goBack: () => void;
};

export const SingleUser: FC<Props> = ({ user, goBack }) => {
  return (
    <div className="Wrapper">
      <div
        className="CloseBtnWrapper"
        data-testid={'backButton'}
        onClick={goBack}
      >
        <img
          className="CloseBtnIcon"
          alt={'closeBtn'}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/512px-Grey_close_x.svg.png?20140617032513'
          }
        />
      </div>
      <div className="SingleUserCardTop">
        <img
          className="SingleUserIcon"
          alt={`user ${user.name}`}
          src={`/foto/${user.photo}`}
        />
        <div data-testid="name">
          <b>{user.name}</b>
        </div>
        <div data-testid="position">{user.position}</div>
      </div>
      <div className="SingleUserCardBottom">
        <div className="SingleUserCardBottomTitle">
          <div>Phone</div>
          <div>Nickname</div>
          <div>Email</div>
        </div>
        <div>
          <div>{user.phone}</div>
          <div className="Link">{user.nickname}</div>
          <div className="Link">{user.email}</div>
        </div>
      </div>
      <div className="BtnSendMessage">Send message</div>
    </div>
  );
};
