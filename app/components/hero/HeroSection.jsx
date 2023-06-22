import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero bg-base-200  pt-7">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div
          className=" min-h-[100%]"
          style={{
            minHeight: '100% !important',
          }}
        >
          <img
            src="img/hero.gif"
            className="  md:h-[500px] md:min-w-[
            object-cover object-center 
            "
          />
        </div>
        <div className="mt-2 md:mt-0">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold ">Find Services</h1>
            <p className="py-6  text-lg md:text-2xl">
              Hire Freelancers to complete tasks and projects for you. Browse a
              wide variety of services and post a job to receive competitive
              bids from Freelancers within minutes.
            </p>

            <div className="">
              <button className="btn btn-neutral h-[55px]">
                Browse Services
              </button>
              <div className="stats shadow bg-transparent">
                <div className="stat">
                  <div className="stat-value ">89,400</div>
                  <div className="stat-title ">Service Listed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold ">Work With Us</h1>
            <p className="py-6  text-lg md:text-2xl ">
              Start Freelancing and earn money by completing tasks and projects
              for clients.
            </p>
            <div className="">
              <button className="btn btn-neutral h-[55px]">
                Start Freelancing
              </button>
              <div className="stats shadow bg-transparent">
                <div className="stat">
                  <div className="stat-value">89,400</div>
                  <div className="stat-title">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
