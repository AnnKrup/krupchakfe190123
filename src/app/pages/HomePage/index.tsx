import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './Features/Users/slice/thunks';
import { selectUsers } from './Features/Users/slice/selectors';
import { UserItem } from './Features/Users/components/UserItem';
import { useNavigate } from 'react-router-dom';
import { User } from './Features/Users/slice/types';

const USERS_TO_SHOW = 3;

export function HomePage() {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const navigate = useNavigate();

  const usersToShow = useMemo(() => {
    return viewAll ? users : users.filter((user, i) => i <= USERS_TO_SHOW - 1);
  }, [users, viewAll]);

  const changeUsersViewStatus = useCallback(() => {
    setViewAll(data => !data);
  }, []);

  const chooseUser = useCallback((user: User) => {
    navigate(`/user/${user.nickname}`);
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="test project" />
      </Helmet>
      <div className="Wrapper">
        <div>
          {usersToShow.map(user => (
            <UserItem user={user} key={user.phone} chooseUser={chooseUser} />
          ))}
        </div>
        <div className="BtnViewAll" onClick={changeUsersViewStatus}>
          {viewAll ? 'Hide' : 'View All'}
        </div>
      </div>
    </>
  );
}
