import React from 'react';
import TabComponent from '../TabComponent';
import { RiProfileLine } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';

const MiniProfile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex md:flex-row-reverse gap-6 mb-4 md:mb-0">
          <button className="btn  glass">
            <div className="gap-2 flex items-center">
              <RiProfileLine size={24} />
              Profile
            </div>
          </button>
          <button className="btn  glass">
            <div className="gap-2 flex items-center">
              <BsChatDots size={24} />
              Chat
            </div>
          </button>
        </div>
        <div className="w-full lg:w-1/4">
          <img
            src="https://picsum.photos/200"
            alt="profile"
            className="rounded-lg max-h-36 w-full sm:w-36 object-contain"
          />
        </div>

        <div className="w-full lg:w-3/4 mt-2">
          <div className="flex flex-col md:flex-row  justify-between">
            <div className="">
              <div className="flex flex-col mb-4 ">
                <span className="font-bold">
                  John Doe J
                  <badge className="badge badge-success badge-md ml-2">
                    Verified
                  </badge>
                </span>
                <div className="">
                  <span className="text-gray-500">@johndoe</span>
                  <span className="text-gray-500">(Web Developer)</span>
                </div>

                <div className="mt-2">
                  <span className="mr-2">🇧🇩</span>
                  <span className="">Bangladesh</span>
                </div>
                <div className="mt-2">
                  <span className="mr-2">Joined in</span>
                  <span className="">20-10-2023</span>
                </div>
                <div className="mt-2">
                  <span className="mr-2">Preferred Languages</span>
                  <span className="text-gray-500">Hindi, English</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mb-4">
                <div className="flex items-center ">
                  <span className="font-bold mr-4">Grade</span>
                  <div className="badge badge-success badge-outline badge-lg">
                    A+
                  </div>
                </div>
                <div className="mb-2">
                  <span className="mr-4">Rating</span>
                  <span className="text-sm text-gray-600">
                    5⭐ (150 reviews)
                  </span>
                </div>
                <div className="mb-2">
                  <span className="mr-4">Completed</span>
                  <span className="text-sm ">
                    400 <span className="text-gray-500">Projects</span>
                  </span>
                </div>
                <div className="mb-2">
                  <span className="mr-4">Earned</span>
                  <span className="text-sm text-yellow-800">
                    40000 <span className="text-gray-500">$</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <div className="flex flex-col mb-4">
                <span className="font-bold">Skills</span>
                <div className="flex flex-wrap">
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    HTML
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    CSS
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    JavaScript
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Python
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Java
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    C++
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    PHP
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Ruby
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Swift
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Kotlin
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    TypeScript
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    React
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Angular
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Vue.js
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Node.js
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Express.js
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Laravel
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Django
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Ruby on Rails
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    MySQL
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    PostgreSQL
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    MongoDB
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Git
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Docker
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    AWS
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Azure
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Google Cloud
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    RESTful API
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    Responsive Design
                  </div>
                  <div className="badge badge-primary badge-outline badge-sm mr-2 mb-2">
                    UI/UX Design
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <div className="flex flex-col mb-4">
                <span className="font-bold">Description</span>
                <div className="flex flex-wrap">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quas
                    cupiditate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TabComponent />
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
