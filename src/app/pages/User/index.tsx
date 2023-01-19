import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../HomePage/Features/Users/slice/selectors';
import { SingleUser } from './components/SingleUser/SingleUser';
import { useCallback } from 'react';

export function User() {
  const params = useParams();
  const user = useSelector(selectUser(params.nickname || ''));
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>UserPage</title>
        <meta name="description" content="A Valu-x test project" />
      </Helmet>
      <SingleUser user={user} goBack={goBack} />
    </>
  );
}
