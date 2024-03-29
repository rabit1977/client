import React from 'react';
import Showcase from '../../components/cards/Showcase';
import AdminMenu from '../../components/nav/AdminMenu';
import { useAuth } from '../../context/auth';

export default function AdminDashboard() {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Showcase
        title={`Hello ${auth?.user?.name}`}
        subTitle='Admin Dashboard'
      ></Showcase>
      <div>
        <div>
          <div>
            <AdminMenu />
          </div>
          <div>
            <div>Admin Information</div>
          </div>
          <ul>
            <li>{auth?.user?.name}</li>
            <li>{auth?.user?.email}</li>
            <li>Admin</li>
          </ul>
        </div>
      </div>
    </>
  );
}
