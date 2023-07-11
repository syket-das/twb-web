import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <div className="h-56 bg-base-200 relative">
        <img
          src="https://picsum.photos/200"
          className="object-cover w-full h-full"
          alt="profile"
        />
      </div>
      <div className="flex justify-between bg-base-200 rounded-lg bg-opacity-60  max-w-full md:max-w-3xl mx-auto relative -top-10">
        <div className="ml-6 flex md:flex-col gap-6">
          <img
            src="https://picsum.photos/200"
            alt="profile"
            className="rounded-lg border  border-green-500 h-24 w-24  md:h-36 md:w-36    object-contain relative -top-10 "
          />
          <div className="relative mt-2 md:mt-0 md:-top-5">
            <div className="flex gap-4 items-center ">
              <h2 className="text-2xl font-bold  ">John Doe</h2>
              <badge className="badge badge-secondary badge-lg ">Pro</badge>
            </div>
            <h3 className="text-xl text-gray-500">@johndoe</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">🇧🇩</span>
              <span className="">Bangladesh</span>
            </div>
            <h4 className="text-gray-500 mb-4">
              Passionate about building new things
            </h4>
          </div>
        </div>
        <div className="mt-8 hidden md:flex gap-4 mr-6 ">
          <button className="btn btn-outline glass">Chat With Jhon</button>
          <button className="btn btn-outline glass">Pay Jhon</button>
        </div>
      </div>

      <div className="w-full md:px-28">
        <div className="p-6 mb-4 w-full">
          <h3 className="text-2xl font-bold mt-8 ">Portfolio's</h3>
          <div className="mt-4  flex flex-wrap gap-6 ">
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              class="block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
