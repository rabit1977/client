import React from 'react';
import Showcase from '../../components/cards/Showcase';
import { useAuth } from '../../context/auth';

export default function Dashboard() {
  const [auth, setAuth] = useAuth();
  return (
    <Showcase title={`Hello ${auth?.user?.name}`} subTitle='User Dashboard'>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Showcase>
  );
}
