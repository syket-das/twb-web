'use client';
import { Tab } from '@headlessui/react';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai';
import { BsPerson, BsPersonFillExclamation, BsViewList } from 'react-icons/bs';
import {
  MdCancel,
  MdOutlineNewspaper,
  MdOutlinePayment,
  MdOutlinePhoto,
  MdOutlineSecurity,
} from 'react-icons/md';

import { GoEyeClosed } from 'react-icons/go';
import BasicDetails from './forms/BasicDetails';
import Photo from './forms/Photo';
import SellerProfile from './forms/SellerProfile';
import Security from './forms/Security';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const page = () => {
  let [categories] = useState({
    Projects: [
      {
        id: 1,
        title: 'Airbnb Clone',
        description:
          'A clone of the Airbnb website built with React, Tailwind CSS, and Firebase.',
        live: 'https://airbnb-clone-1a1a1.web.app/',
        github: 'https:github.com',
      },
      {
        id: 1,
        title: 'Youtube Clone',
        description:
          'A clone of the Youtube website built with React, Tailwind CSS, and Firebase.',
        live: 'https://airbnb-clone-1a1a1.web.app/',
        github: 'https:github.com',
      },
    ],
    Reviews: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full h-full   py-0 sm:px-0">
      <Tab.Group vertical>
        <div className=" md:flex ">
          <Tab.List className="flex md:flex-col md:min-h-screen md:min-w-[250px]  space-x-1  p-2 overflow-auto  ">
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <BsViewList className="w-5 h-5" /> <span>Overview</span>
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <BsPerson className="w-5 h-5" /> <span>Profile</span>
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <MdOutlinePhoto className="w-5 h-5" /> <span>Photos</span>
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <MdOutlineNewspaper className="w-5 h-5" />{' '}
                <span>Seller Profile</span>
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <MdOutlineSecurity className="w-5 h-5" /> <span>Security</span>
              </div>{' '}
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <MdOutlinePayment className="w-5 h-5" />{' '}
                <span>Subscription</span>
              </div>{' '}
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  ' mt-4 p-2 text-black rounded-lg py-2.5 text-sm font-medium leading-5  focus:outline-none',
                  '   ',
                  selected ? ' border bg-slate-100   ' : ''
                )
              }
            >
              <div className="flex justify-between items-center">
                <GoEyeClosed className="w-5 h-5" /> <span>Close Account</span>
              </div>{' '}
            </Tab>
          </Tab.List>
          <Tab.Panels className="border-t md:border-l w-full">
            <Tab.Panel className=" h-full">
              <div className="min-w-full p-2 md:p-8">Hlw world</div>
            </Tab.Panel>
            <Tab.Panel>
              <BasicDetails />
            </Tab.Panel>
            <Tab.Panel>
              <Photo />
            </Tab.Panel>
            <Tab.Panel>
              <SellerProfile />
            </Tab.Panel>
            <Tab.Panel>
              <Security />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default page;
