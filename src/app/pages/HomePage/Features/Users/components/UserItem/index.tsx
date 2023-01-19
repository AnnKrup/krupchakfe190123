import * as React from 'react';
import { User } from '../../slice/types';
import { FC, useCallback } from 'react';

type Props = {
  user: User;
  chooseUser: (user: User) => void;
};

export const UserItem: FC<Props> = ({ user, chooseUser }) => {
  const onClick = useCallback(() => {
    chooseUser(user);
  }, [user, chooseUser]);

  return (
    <div className="UserItem">
      <div className="UserItemInfo">
        <img
          className="UserItemIcon"
          alt={`user ${user.name}`}
          src={`foto/${user.photo}`}
        />
        <div>
          <div>{user.name}</div>
          <div>{user.nickname}</div>
        </div>
      </div>
      <div className="UserItemBtnView" onClick={onClick}>
        View
      </div>
    </div>
  );
};
