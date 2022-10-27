import React, { useState } from 'react';
import Showcase from '../../components/cards/Showcase';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import { useLocation, useNavigate } from 'react-router';

export default function Login() {
  // state
  const [email, setEmail] = useState("andi@gmail.com");
  const [password, setPassword] = useState("");
  // hook
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      // console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login successful");
        navigate(location.state || "/dashboard");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div>
      <Showcase title='Login' />
      <div className='max-w-xs mt-4 mx-auto border rounded-xl bg-sky-300 shadow-md'>
        <div className=' '>
          <div className=''>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col h-60 justify-evenly m-8 '
            >
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
    </div>
  );
}
