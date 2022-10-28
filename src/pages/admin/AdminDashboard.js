import React from 'react';
import Showcase from '../../components/cards/Showcase';
import { useAuth } from '../../context/auth';

export default function AdminDashboard() {
  const [auth, setAuth] = useAuth();

  return (
    <Showcase title={`Hello ${auth?.user?.name}`} subTitle='Admin Dashboard'>
      <pre> {JSON.stringify(auth, null, 4)}</pre>
    </Showcase>
  );
}
