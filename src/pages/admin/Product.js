import React from 'react';
import Showcase from '../../components/cards/Showcase';
import AdminMenu from '../../components/nav/AdminMenu';
import { useAuth } from '../../context/auth';

export default function AdminProduct() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Showcase
        title={`Hello ${auth?.user?.name}`}
        subTitle='Admin Dashboard'
      />
      <div>
        <div>
          <div>
            <AdminMenu />
          </div>
          <div>
            <div>Create Products</div>
            <p>Create products from...</p>
          </div>
        </div>
      </div>
    </>
  );
}
