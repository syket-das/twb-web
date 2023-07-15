'use client';
import React from 'react';
import PortfolioCard from './card/PortfolioCard';

const FeaturedServices = () => {
  return (
    <>
      <div className="container px-8 my-16 mx-auto md:max-w-[80vw] ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Services
        </h2>
        <div
          className="
          flex justify-center gap-4 flex-wrap
        "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <PortfolioCard key={index} />;
          })}
        </div>
        <div className=" mt-8 flex justify-center ">
          <div className=" flex items-center gap-2 cursor-pointer hover:underline">
            <p className="text-gray-500 hover:underline">View All Services</p>
            <svg
              className="w-6 h-6 text-gray-500 animate-bounce"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
