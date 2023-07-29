import React from 'react';

const Photo = () => {
  return (
    <div className="min-w-full p-2 md:p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Photo
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {' '}
            Upload your photo here
          </p>
        </div>

        <div className="form-control w-full max-w-xs">
          <div className="w-full h-48 border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>

          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary mt-4">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
