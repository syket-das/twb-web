'use client';
import PortfolioCard from '@/components/card/PortfolioCard';
import { useParams } from 'next/navigation';
import React from 'react';
const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div className="mx-6 my-8">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>{categoryId}</li>
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12   p-4">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4 ">
            <h1 className="text-3xl font-extrabold  ">Category {categoryId}</h1>
            <div className="flex gap-4 items-center justify-between ">
              <input
                type="text"
                placeholder="Type here"
                className="input  border-gray-500 w-full md:w-96"
              />
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mx-2">Online</span>
                  <input type="checkbox" className="toggle toggle-success" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-4 items-center flex-wrap">
            <div className="form-control w-full md:max-w-[300px]">
              <label className="label">
                <span className="label-text">Sort by</span>
              </label>
              <select className="select  border-gray-500">
                <option disabled selected>
                  All
                </option>
                <option>Top rated</option>
                <option>Newest first</option>
                <option>Best selling</option>
              </select>
            </div>
            <div className="form-control w-full md:max-w-[300px] ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <select className="select border-gray-500">
                <option disabled selected>
                  All
                </option>
                <option>1 - 100</option>
                <option>100 - 1000</option>
                <option>1000 - 10000</option>
                <option>10000 - 100000</option>
                <option>100000 - 1000000</option>
              </select>
            </div>
            <div className="form-control w-full md:max-w-[300px]">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <select className="select border-gray-500">
                <option disabled selected>
                  All
                </option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>France</option>
              </select>
            </div>
            <div className="form-control w-full md:max-w-[300px] ">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select className="select border-gray-500">
                <option disabled selected>
                  All
                </option>
                <option>Verified</option>
                <option>Un verified</option>
              </select>
            </div>
            <div className="form-control w-full md:max-w-[300px] ">
              <label className="label">
                <span className="label-text">Language</span>
              </label>
              <select className="select border-gray-500">
                <option disabled selected>
                  All
                </option>
                <option>English</option>
                <option>Hindi</option>
                <option>Urdu</option>
                <option>Bengali</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="flex  gap-6 flex-wrap items-center justify-center my-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <PortfolioCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
