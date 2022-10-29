import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    <>
      <div>User Links</div>
      <ul>
        <li>
          <NavLink to='/dashboard/user/profile'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/user/orders'>Orders</NavLink>
        </li>
      </ul>
    </>
  );
}
