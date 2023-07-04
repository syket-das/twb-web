import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

const HeaderComponent = () => {
  return (
    <div className="navbar bg-base-300 h-20 shadow-lg ">
      <div className="mr-6 ">
        <a className="btn bg-transparent normal-case text-xl" href="/">
          <Logo /> TWB
        </a>
      </div>
      <div className=" hidden  gap-2 md:block">
        <Link href="/" className="btn btn-ghost  h-10">
          Dashboard
        </Link>
        <Link href="/services" className="btn btn-ghost  h-10">
          Find Services
        </Link>
      </div>
      <div className="flex-none gap-2 ms-auto">
        <div className="form-control hidden md:block ">
          <input
            type="text"
            placeholder="Search for services"
            className="input input-bordered  md:w-auto h-10 "
          />
        </div>
        <div className="dropdown dropdown-end z-10">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/img/user.svg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            <li className="mt-2 ">
              <a className="justify-between py-2">Profile</a>
            </li>
            <li className="mt-2">
              <a className="justify-between py-2" href="/">
                Dashboard
              </a>
            </li>
            <li className="mt-2">
              <a className="justify-between py-2" href="/services">
                Find Services
              </a>
            </li>

            <div className="divider"></div>
            <li>
              <a className="justify-between py-2">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

// avatar url : https://avatars.dicebear.com/api/avataaars/1.svg
