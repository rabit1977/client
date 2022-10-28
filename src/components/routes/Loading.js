import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingGIF from '../../images/loading.gif';

export default function Loading({ path = 'login' }) {
  // state
  const [count, setCount] = useState(3);
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <img src={LoadingGIF} alt='Loading' className='w-[400px]' />
    </div>
  );
}
