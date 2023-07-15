'use client';
import React from 'react';

const ProcessFlow = () => {
  return (
    <div className="container px-8 my-16 mx-auto md:max-w-[80vw]">
      <h2 className="text-3xl font-bold text-center mb-2">
        Your Job Our Responsibility
      </h2>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center mt-10 md:mt-0 md:max-w-[350px]">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50">
            <svg
              className="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14H14V12H12V14ZM12 10H14V4H10V6H12V10ZM12 20H14V16H12V20ZM12 6V4H4V20H12V18H6V6H12ZM16 20H20V18H16V20ZM16 16H20V14H16V16ZM16 10H20V6H16V10Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Choose Freelancer
          </h3>
          <p className="text-sm  text-gray-500 sm:text-base text-justify break-all prose">
            Browse freelancer profiles, chat in real-time and compare proposals
            to find the best fit for your job. You can also choose to post a job
            and let the freelancers contact you.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 md:max-w-[350px]">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50">
            <svg
              className="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14H14V12H12V14ZM12 10H14V4H10V6H12V10ZM12 20H14V16H12V20ZM12 6V4H4V20H12V18H6V6H12ZM16 20H20V18H16V20ZM16 16H20V14H16V16ZM16 10H20V6H16V10Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Payment Protection
          </h3>
          <p className="text-sm text-justify text-gray-500 sm:text-base break-all prose">
            Only pay for work when it has been completed and you're 100%
            satisfied. Pay safely using our Milestone Payment system - release
            payments according to a schedule of goals you set, or pay only upon
            completion.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 md:max-w-[350px]">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50">
            <svg
              className="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14H14V12H12V14ZM12 10H14V4H10V6H12V10ZM12 20H14V16H12V20ZM12 6V4H4V20H12V18H6V6H12ZM16 20H20V18H16V20ZM16 16H20V14H16V16ZM16 10H20V6H16V10Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Get Work Done
          </h3>
          <p className="text-sm text-justify text-gray-500 sm:text-base break-all prose">
            When you are satisfied with the work, you can approve the work and
            release the payment to the freelancer. Our 24/7 support team is
            available to assist you with any questions you may have.
          </p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ProcessFlow;
