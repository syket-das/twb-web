import { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabComponent() {
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
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-300/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              <li className="relative rounded-md p-3 mb-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">Hlw</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.{' '}
                </p>

                <div className="flex gap-6 mt-2">
                  <AiOutlineLink size={24} className="cursor-pointer" />
                  <AiOutlineGithub size={24} className="cursor-pointer" />
                </div>
              </li>
              <li className="relative rounded-md p-3 mb-3 hover:bg-gray-100">
                <h3 className="text-sm font-medium leading-5">Hlw</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cupiditate laboriosam fugiat.{' '}
                </p>

                <div className="flex gap-6 mt-2">
                  <AiOutlineLink size={24} className="cursor-pointer" />
                  <AiOutlineGithub size={24} className="cursor-pointer" />
                </div>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {categories.Reviews.map((post) => (
                <li
                  key={post.id}
                  className="relative rounded-md p-3 flex gap-4 items-center"
                >
                  <div className="h-full flex flex-col justify-between gap-4">
                    <button className="btn ">
                      <AiOutlineArrowUp size={24} className="" />
                    </button>
                    <button
                      className="btn 
                    "
                    >
                      <AiOutlineArrowDown
                        size={24}
                        className="cursor-pointer"
                      />
                    </button>
                  </div>
                  <div>
                    <div className="flex gap-6 my-2 items-center">
                      <img
                        src="https://picsum.photos/200"
                        className="h-8 w-8 rounded-full"
                        alt=""
                      />
                      <span className="text-sm font-medium leading-5">
                        John Doe
                      </span>
                    </div>
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} likes</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} unlikes</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
