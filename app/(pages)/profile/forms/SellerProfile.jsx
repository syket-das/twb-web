import React from 'react';

import { MdCancel } from 'react-icons/md';
const SellerProfile = () => {
  return (
    <div className="min-w-full p-2 md:p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            seller profile
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {' '}
            Update your seller profile
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-md">Skills</p>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="eg. +8802368534752"
              className="input  border-black w-full "
            />{' '}
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
