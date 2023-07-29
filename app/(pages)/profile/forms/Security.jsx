import React from 'react';

const Security = () => {
  return (
    <div className="min-w-full p-2 md:p-8">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Security
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {' '}
            Change your password or set up two-factor authentication.
          </p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Old Password</span>
          </label>
          <input
            type="text"
            placeholder="eg. *********"
            className="input  border-black  "
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="text"
              placeholder="eg. *********"
              className="input  border-black  "
            />
          </div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="eg. *********"
              className="input  border-black  "
            />
          </div>
          <button className="btn btn-primary w-full">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
