'use client';

import {AuthContext} from '@/shared/Contexts';
import {FC, useContext} from 'react';

const UserProfile: FC = () => {
  const userInfoContext = useContext(AuthContext);

  if (!userInfoContext) {
    console.log('User is not authenticated');
    return null;
  }

  return (
    <div>
      <h1>Hello {userInfoContext?.username}!</h1>
      <h2>Personal Data</h2>
      <h3>Address</h3>
      {userInfoContext.address ? (
        <ul>
          <li>{userInfoContext.address?.street}</li>
          <li>{userInfoContext.address?.houseNumber}</li>
          <li>{userInfoContext.address?.city}</li>
          <li>{userInfoContext.address?.zipCode}</li>
        </ul>
      ) : (
        <div>No address defined</div>
      )}
    </div>
  );
};

export default UserProfile;
