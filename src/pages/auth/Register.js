import React, { useState } from 'react';
import Showcase from '../../components/cards/Showcase';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router';

export default function Register() {
  // state
  const [name, setName] = useState('Ryan');
  const [email, setEmail] = useState('ryan@gmail.com');
  const [password, setPassword] = useState('rrrrrr');
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
      });
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem('auth', JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success('Registration successful');
        navigate('/dashboard');
      }
    } catch (err) {
      console.log(err);
      toast.error('Registration failed. Try again.');
    }
  };

  return (
    <div>
      <Showcase title='Register' />
      <div className='max-w-xs mt-4 mx-auto border rounded-xl bg-sky-300 shadow-md'>
        <div className=' '>
          <div className=''>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col h-60 justify-evenly m-8 '
            >
              <input
                className='border outline-none rounded-lg hover:bg-slate-50 p-2 mb-3'
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                className='border outline-none rounded-lg hover:bg-slate-50 p-2 mb-3'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <input
                className='border outline-none rounded-lg hover:bg-slate-50 p-2 mb-3'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <button className='p-2 rounded-lg text-white bg-sky-800 font-semibold text-xl'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(name, null, 4)}</pre>
    </div>
  );
}
