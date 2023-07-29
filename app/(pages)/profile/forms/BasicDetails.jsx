import React from 'react';

import { MdCancel } from 'react-icons/md';

const BasicDetails = () => {
  return (
    <div className="min-w-full p-2 md:p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Basic Information
        </h3>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="eg. Syket Das"
            className="input  border-black  "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="eg. saiketsd23@example.com"
            className="input  border-black  "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="eg. saiketsd23"
            className="input  border-black  "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Headline</span>
          </label>
          <input
            type="text"
            placeholder="eg. Full Stack Developer"
            className="input  border-black  "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">About</span>
          </label>
          <textarea
            type="text"
            placeholder="eg. I am a full stack developer. I love to work with React and Node.js."
            className="input  border-black  "
            rows={4}
            style={{
              minHeight: '150px',
              resize: 'none',
            }}
          />
        </div>

        <div className="flex gap-2 justify-between w-full">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <select className="select border-black w-full">
              <option disabled="disabled" selected="selected">
                Select Country
              </option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>

              <option>Japan</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="text"
              placeholder="eg. Kolkata"
              className="input  border-black  "
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between w-full">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">DOB</span>
            </label>
            <input
              type="date"
              placeholder="eg. 20-10-2002"
              className="input  border-black  "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Post Code</span>
            </label>
            <input
              type="text"
              placeholder="2333"
              className="input  border-black  "
            />
          </div>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="eg. 32, Example Street, Kolkata, India"
            className="input  border-black  "
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-md">Languages</p>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>English</span>
              <MdCancel />
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="eg. English"
              className="input  border-black w-full "
            />{' '}
            <button className="btn">Add</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-md">Phone Numbers</p>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>+91 8100156405</span>
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

        <div className="flex flex-col gap-4 w-full">
          <p className="text-md">Social Links</p>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>https://www.facebook.com/saiketsd23</span>
              <MdCancel />
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <select className="select border-black ">
              <option disabled="disabled" selected="selected">
                Social Media
              </option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>GitHub</option>
              <option>GitLab</option>
              <option>BitBucket</option>

              <option>StackOverflow</option>
            </select>
            <input
              type="text"
              placeholder="eg. https://www.facebook.com/saiketsd23"
              className="input  border-black w-full "
            />{' '}
            <button className="btn">Add</button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8 ">
        <button className="btn btn-info min-w-[200px]">Save Details</button>
      </div>
    </div>
  );
};

export default BasicDetails;
