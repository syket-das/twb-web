'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import DialogComponent from '../DialogComponent';
import { toast } from 'react-hot-toast';
import { signIn, signOut } from 'next-auth/react';
import { BsBell, BsChatSquareText } from 'react-icons/bs';
import axios from 'axios';

const HeaderComponent = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error('Passwords does not match');
      return;
    }

    if (data.password.length < 6) {
      toast.error('Password must be atleast 6 characters');
      return;
    }

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      toast.error('Please fill all the fields');
      return;
    }

    try {
      const res = await axios.post('/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success('Registered successfully');
      setIsRegisterOpen(false);
      setTimeout(() => {
        setIsOpen(true);
      }, 100);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    await signIn('google');

    setIsOpen(false);
  };

  const githubLogin = async (e) => {
    e.preventDefault();
    await signIn('github');

    setIsOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
    toast.success('Logged out successfully');
  };

  const handleForm = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      username: email,
      password: password,
      redirect: true,
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar bg-base-200 h-20 border-b border-gray-300">
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
          {session?.id && (
            <div className="flex items-center gap-6">
              <div className="indicator">
                <span className="indicator-item badge glass">99+</span>
                <button className="btn btn-square btn-ghost">
                  <BsChatSquareText size={24} />
                </button>
              </div>

              <div className="indicator">
                <span className="indicator-item badge glass">99+</span>
                <button className="btn btn-square btn-ghost">
                  <BsBell size={24} />
                </button>
              </div>
            </div>
          )}
          <div className="ml-6 dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={`
                ${session?.image ? session?.image : `/img/person.svg`}`}
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="mt-2 ">
                {session?.email ? (
                  <Link
                    className="flex items-center py-2 flex-wrap"
                    href={`/profile`}
                  >
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img
                          src={
                            session?.image ? session?.image : `/img/person.svg`
                          }
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>{' '}
                    {session?.name}
                  </Link>
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
              {session?.email && (
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <button className="btn btn-accent w-full " onClick={handleForm}>
                Login
              </button>
            </div>
            <p className="text-gray-700">
              Dont have account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    setIsRegisterOpen(true);
                  }, 100);
                }}
              >
                Sign Up
              </span>{' '}
            </p>
            <div className="divider">OR</div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full " onClick={googleLogin}>
                  Login With Google
                </button>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full " onClick={githubLogin}>
                  Login With Github
                </button>
              </div>
            </div>
          </div>
        </form>
      </DialogComponent>

      {/* ------ */}

      <DialogComponent
        isOpen={isRegisterOpen}
        setIsOpen={setIsRegisterOpen}
        title={'Welcome To The Work Bazar'}
        subtitle={'Create your account and start your journey with us!'}
      >
        <form className="w-full mt-8">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full  px-3  ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="text"
                placeholder="Jane"
                value={data.name}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="email"
                type="text"
                placeholder="Jane@example.com"
                value={data.email}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  -mx-3">
            <div className="flex-1 px-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="password"
                type="password"
                placeholder="******************"
                value={data.password}
                onChange={onchange}
              />
            </div>
            <div className="flex-1 px-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="confirmPassword"
                type="password"
                placeholder="******************"
                value={data.confirmPassword}
                onChange={onchange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-4">
                <input type="checkbox" checked="checked" className="checkbox" />
                <span className="label-text">
                  Agree to{' '}
                  <a href="#" className="text-blue-500 hover:underline">
                    {' '}
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="flex flex-wrap -mx-3 mb-6">
              <button className="btn btn-accent w-full " onClick={register}>
                Register Now
              </button>
            </div>
            <p className="text-gray-700">
              Already have account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => {
                  setIsRegisterOpen(false);
                  setTimeout(() => {
                    setIsOpen(true);
                  }, 100);
                }}
              >
                Sign In
              </span>{' '}
            </p>
            <div className="divider">OR</div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full " onClick={googleLogin}>
                  Join With Google
                </button>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <button className="btn  w-full " onClick={githubLogin}>
                  Join With Github
                </button>
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
