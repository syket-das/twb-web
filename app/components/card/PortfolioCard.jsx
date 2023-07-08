import React from 'react';
import DialogComponent from '../DialogComponent';
import MiniProfile from './MiniProfile';

const PortfolioCard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className=" flex-1  bg-white border border-gray-200 rounded-lg shadow min-w-[300px]">
      <div className="flex justify-between items-center px-4 pt-4 mb-6">
        <div className="badge badge-outline ">Verified</div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <div className="avatar indicator ">
          <span className="indicator-item badge badge-success">online</span>
          <div className="w-20 h-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          Starting from <b className="text-white"> $1000</b>
        </span>
        <div className="flex items-center gap-2 mt-4 ">
          <div className="rating rating-xs">
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
          <div className="text-sm text-gray-500 dark:text-gray-400">
            (12 reviews)
          </div>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
          onClick={() => setIsOpen(true)}
            href="#/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Portfolio
          </a>
          <a

            href="#/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
      <DialogComponent
        title="Portfolio"
        subtitle="View Portfolio of Bonnie Green"
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        children={<MiniProfile />}
        
      />
    </div>
  );
};

export default PortfolioCard;
