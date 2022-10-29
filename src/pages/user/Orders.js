import React from 'react';
import Showcase from '../../components/cards/Showcase';
import UserMenu from '../../components/nav/UserMenu';
import { useAuth } from '../../context/auth';

export default function UserOrders() {
  const [auth, setAuth] = useAuth();
  
  return (
    <>
      <Showcase title={`Hello ${auth?.user?.name}`} subTitle='Dashboard' />
      <div>
        <div>
          <div>
            {' '}
            <UserMenu />
          </div>
          <div>
            <div>Orders</div> user order history...
          </div>
        </div>
      </div>
    </>
  );
}
