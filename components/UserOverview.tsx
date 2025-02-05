'use client';

import {AuthContext} from '@/shared/Contexts';
import {FC} from 'react';
import UserProfile from './UserProfile';

const UserOverview: FC = () => {
  const userInfo = {token: 'token', username: 'Max Mustermann', password: 'musterpasswort', address: undefined};

  return (
    <AuthContext.Provider value={userInfo}>
      <UserProfile />;
    </AuthContext.Provider>
  );
};

export default UserOverview;
