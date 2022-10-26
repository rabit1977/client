import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Menu() {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <>
      <ul className='flex justify-between shadow-md p-3'>
        <li className='nav-item'>
          <NavLink
            className='border-b-4 hover:border-b-sky-600 border-b-sky-500 active'
            aria-current='page'
            to='/'
          >
            HOME
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/login' className=''>
            LOGIN
          </NavLink>
        </li>
        <li className=''>
          <NavLink className='' to='/register'>
            REGISTER
          </NavLink>
        </li>
      </ul>
    </>
  );
}
