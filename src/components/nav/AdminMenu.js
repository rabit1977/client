import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {
  return (
    <>
      <div>Admin Links</div>
      <ul>
        <li>
          <NavLink to='/dashboard/admin/category'>Create category</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/admin/product'>Create product</NavLink>
        </li>
      </ul>
    </>
  );
}
