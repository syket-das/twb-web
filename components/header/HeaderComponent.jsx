'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import DialogComponent from '../DialogComponent';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, signInWithGoogle } from '@/redux/features/auth/authSlice';
import { toast } from 'react-hot-toast';
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (user && !loading && !error) {
      toast.success(`Welcome ${user?.displayName}`);
    }

    return () => {};
  }, [user, error]);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle();
    setIsOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();

    toast.success('Logged out successfully');
  };

  return (
    <>
      <div
        className="navbar bg-base-200 h-20 
      border-b border-gray-300
    "
      >
        <div className="mr-6 ">
          <a
            className="btn bg-transparent border-0 normal-case text-xl
          hover:bg-transparent hover:border-0 hover:text-xl
        "
            href="/"
          >
            <Logo /> TWB
          </a>
        </div>
        <div className=" hidden  gap-2 md:block">
          <Link href="/" className="btn   h-10">
            Dashboard
          </Link>
          <Link href="/services" className="btn   h-10">
            Find Services
          </Link>
        </div>
        <div className="flex-none gap-2 ms-auto">
          <div className="form-control hidden md:block ">
            <input
              type="text"
              placeholder="Search for services"
              className="input  md:w-[300px] h-10 
            "
            />
          </div>
          <div className="dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={`
                ${
                  user?.photoURL
                    ? user?.photoURL
                    : `https://avatars.dicebear.com/api/avataaars/9.svg`
                }`}
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="mt-2 ">
                {user?.email ? (
                  <a className="flex items-center py-2 flex-wrap" href="/">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img
                          src={user?.photoURL}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>{' '}
                    {user?.displayName}
                  </a>
                ) : (
                  <div
                    className="p-4 btn  flex items-center "
                    onClick={() => setIsOpen(true)}
                  >
                    Login
                  </div>
                )}
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
              {user?.email && (
                <li>
                  <a className="justify-between py-2" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={'Welcome Back To  TWB'}
        subtitle={'Login in here to access your account!'}
      >
        <form className="w-full mt-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-4">
                <input type="checkbox" checked="checked" className="checkbox" />
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <p className="text-gray-500 cursor-pointer">Forgot password?</p>
          </div>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="flex flex-wrap -mx-3 mb-6">
              <button className="btn btn-accent w-full ">Login</button>
            </div>
            <p className="text-gray-700">
              Dont have account?{' '}
              <span className="text-blue-400 hover:underline cursor-pointer">
                Sign Up
              </span>{' '}
            </p>
            <div className="divider">OR</div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full " onClick={handleLogin}>
                  Login With Google
                </button>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full ">Login With Apple</button>
              </div>
            </div>
          </div>
        </form>
      </DialogComponent>
    </>
  );
};

export default HeaderComponent;

// avatar url : https://avatars.dicebear.com/api/avataaars/1.svg
