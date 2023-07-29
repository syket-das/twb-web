import React from 'react';

import { MdCancel } from 'react-icons/md';
const SellerProfile = () => {
  return (
    <div className="min-w-full p-2 md:p-8">
      <div className="flex flex-col justify-center items-center gap-6">
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

            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>

            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>

            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>

            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex  gap-2 justify-between items-center">
              <div>Photoshop</div>

              <MdCancel />
            </div>
            <div className="badge badge-ghost badge-lg flex gap-2 justify-between items-center">
              <span>React js</span>
              <MdCancel />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex  gap-4 w-full">
              <select className="select border-black ">
                <option disabled="disabled" selected="selected">
                  Experience
                </option>
                <option>Bigenner</option>
                <option>Intermidiate</option>
                <option>Expert</option>
              </select>
              <input
                type="text"
                placeholder="eg. React js"
                className="input  border-black w-full "
              />{' '}
            </div>
            <div className="flex gap-4 w-full">
              <textarea
                className="textarea border-black w-full"
                rows="2"
                placeholder="eg. I am a web developer with 3 years of experience in React js"
              />

              <button
                className="btn min-w-[100px] h-full
                
              "
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-md">Projects</p>

          <div className="flex flex-wrap gap-2">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <button className="btn btn-square btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-md">We are using cookies for no reason.</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum fuga dolore quis voluptates est iusto eos ipsam
                  accusantium inventore consequuntur saepe voluptatibus non
                  cumque reiciendis, harum aspernatur ipsa cum excepturi facere
                  optio quia nam. Quasi hic consectetur cumque incidunt,
                  repellendus impedit officia quos nisi deserunt atque laborum
                  vitae amet quae?
                </p>
                <div className="divider"></div>

                <div className="flex gap-4">
                  <button className="btn">Link</button>
                  <button className="btn">Code</button>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <button className="btn btn-square btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-md">We are using cookies for no reason.</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum fuga dolore quis voluptates est iusto eos ipsam
                  accusantium inventore consequuntur saepe voluptatibus non
                  cumque reiciendis, harum aspernatur ipsa cum excepturi facere
                  optio quia nam. Quasi hic consectetur cumque incidunt,
                  repellendus impedit officia quos nisi deserunt atque laborum
                  vitae amet quae?
                </p>
                <div className="divider"></div>

                <div className="flex gap-4">
                  <button className="btn">Link</button>
                  <button className="btn">Code</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="eg. Hotel Booking Website"
                className="input  border-black  "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Project Description</span>
              </label>
              <textarea
                type="text"
                placeholder="eg. Hotel Booking Website with React js and Node js"
                className="input  border-black  min-h-[150px]"
                rows={3}
              />
            </div>

            <div className="flex w-full gap-4">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Live Url</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. https://www.example.com"
                  className="input  border-black  "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Code</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. http://example.com"
                  className="input  border-black  "
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn min-w-[200px]">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
