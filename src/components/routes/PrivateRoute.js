import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../../context/auth';

export default function PrivateRoute() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [ok, setOk] = useAuth(false);

  useEffect(() => {
    if (auth?.token) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : 'Loading...';
}
