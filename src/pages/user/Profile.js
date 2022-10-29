import React from 'react';
import Showcase from '../../components/cards/Showcase';
import UserMenu from '../../components/nav/UserMenu';
import { useAuth } from '../../context/auth';

export default function UserProfile() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Showcase title={`Hello ${auth?.user?.name}`} subTitle='Dashboard' />
      <div>
        <div>
          <div>
            <UserMenu />
          </div>
          <div>
            <div>Profile</div> update form...
          </div>
        </div>
      </div>
    </>
  );
}
