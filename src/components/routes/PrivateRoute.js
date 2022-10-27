import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../../context/auth';
import Loading from './Loading';


export default function PrivateRoute() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`/auth-check`);
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  // useEffect(() => {
  //   if (auth?.token) {
  //     setOk(true);
  //   } else {
  //     setOk(false);
  //   }
  // }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
}

