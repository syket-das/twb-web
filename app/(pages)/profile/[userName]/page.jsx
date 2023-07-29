'use client';
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
        <badge className="badge badge-error   badge-lg absolute top-4 right-4">
          {' '}
          A+{' '}
        </badge>
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
          <h3 className="text-2xl font-bold mt-8 ">About</h3>
          <div className="mt-4  text-justify hyphens-auto text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            quia eveniet quos. Libero autem praesentium obcaecati fugit numquam
            iusto ab, expedita eius sit facilis necessitatibus repellat et
            suscipit incidunt culpa. Voluptates ea deserunt, voluptas expedita
            ut ratione aperiam itaque, saepe a hic eius illo harum, molestias
            delectus voluptate possimus? Voluptates ab reprehenderit magni harum
            totam, officiis culpa ea, id aliquam eaque nostrum, et iure eos aut?
            Esse temporibus ut culpa, nobis architecto beatae dolor libero,
            velit repellat animi maiores reprehenderit magnam quasi impedit,
            ducimus veritatis labore ipsa itaque accusamus natus veniam! Amet
            magnam voluptates, nisi sit ullam minima nihil? Doloremque autem
            officia dolor sunt pariatur quia minus iusto recusandae, amet
            voluptatibus quibusdam deleniti neque ipsum asperiores rem, delectus
            perferendis quisquam quaerat nihil sed est. Fugiat commodi nesciunt
            pariatur corporis culpa minima tempora temporibus amet eaque
            perspiciatis dolore ipsa optio nemo repellendus deserunt rem veniam,
            laboriosam adipisci, harum id? Maiores, dolorem.
          </div>
        </div>
      </div>

      <div className="w-full md:px-28">
        <div className="p-6 mb-4 w-full">
          <h3 className="text-2xl font-bold mt-8 ">Portfolio's</h3>
          <div className="mt-4  flex flex-wrap gap-6 ">
            <div
              href="#"
              className=" block w-full md:max-w-sm  image-full relative"
            >
              <figure>
                <img
                  src="https://picsum.photos/200"
                  className="object-cover w-full  hover:brightness-50 transition-all duration-500 ease-in-out portfolio-img"
                  alt=""
                />
              </figure>
              <div className="p-6 absolute bottom-1 portfolio-img hidden hover:block">
                <h2 className="mb-2 font-bold tracking-wide text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
            </div>
            <div
              href="#"
              className=" block w-full md:max-w-sm  image-full relative"
            >
              <figure>
                <img
                  src="https://picsum.photos/200"
                  className="object-cover w-full  hover:brightness-50 transition-all duration-500 ease-in-out portfolio-img"
                  alt=""
                />
              </figure>
              <div className="p-6 absolute bottom-1 portfolio-img hidden hover:block">
                <h2 className="mb-2 font-bold tracking-wide text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
            </div>
            <div
              href="#"
              className=" block w-full md:max-w-sm  image-full relative"
            >
              <figure>
                <img
                  src="https://picsum.photos/200"
                  className="object-cover w-full  hover:brightness-50 transition-all duration-500 ease-in-out portfolio-img"
                  alt=""
                />
              </figure>
              <div className="p-6 absolute bottom-1 portfolio-img hidden hover:block">
                <h2 className="mb-2 font-bold tracking-wide text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:px-28">
        <div className="p-6 mb-4 w-full">
          <h3 className="text-2xl font-bold mt-8 ">Rating & Reviews</h3>
          <div className="mt-4 ">
            <div className="flex flex-col-reverse gap-6 lg:flex-row  items-center justify-between">
              <select className="select select-bordered w-full  md:max-w-xs">
                <option disabled selected>
                  Reviews By Portfolio's
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>

              <div className=" flex gap-4 items-center">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">As Freelancer</div>
                    <div className="stat-value">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <div className="stat-desc">Projects Completed : 10</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">As Employer</div>
                    <div className="stat-value">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <div className="stat-desc">Projects Given : 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="mt-2 flex flex-col gap-8">
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4">
                <img
                  src="https://picsum.photos/200"
                  className="h-12 w-12 rounded-full"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <span className="font-bold">John Doe</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">🇧🇩</span>
                    <span className="text-xs">Bangladesh</span>
                  </div>{' '}
                  <div className="flex items-center max-w-[150px] py-2 px-4 text-xs justify-center bg-slate-100 rounded-md">
                    As Freelancer
                  </div>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="stat">
                  <div className="stat-title">given: 25$</div>
                  <div className="stat-value">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="stat-desc">
                    <span className="text-gray-500">20-10-2021</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4">
                <img
                  src="https://picsum.photos/200"
                  className="h-12 w-12 rounded-full"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Jane Doe</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">🇮🇳</span>
                    <span className="text-xs">India</span>
                  </div>{' '}
                  <div className="flex items-center max-w-[150px] py-2 px-4 text-xs justify-center bg-slate-100 rounded-md">
                    As Employeer
                  </div>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="stat">
                  <div className="stat-title">earned: 25$</div>
                  <div className="stat-value">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="stat-desc">
                    <span className="text-gray-500">20-10-2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
