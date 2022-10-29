import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Showcase from '../../components/cards/Showcase';
import AdminMenu from '../../components/nav/AdminMenu';
import { useAuth } from '../../context/auth';

export default function AdminCategory() {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/category', { name });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setName('');
        toast.success(`'${data.name}' is created`);
      }
    } catch (err) {
      console.log(err);
      toast.error('Create category failed. Try again.');
    }
  };

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
            <div>Manage Categories</div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Category name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
