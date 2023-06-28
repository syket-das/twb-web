'use client';
import ClientOnly from '@/app/components/ClientOnly';
import React, { useState } from 'react';

const page = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Android App Development',
      description:
        'We are a leading Android app development company that builds scalable and interactive Android applications for global businesses.',
      availableFreelancers: 10,
      minOfferingPrice: 1000,
      maxOfferingPrice: 2000,
      onlineFreeLancers: 5,
    },
    {
      id: 2,
      name: 'iOS App Development',
      description:
        'We are a leading iOS app development company that builds scalable and interactive iOS applications for global businesses.',
      availableFreelancers: 10,
      minOfferingPrice: 1000,
      maxOfferingPrice: 2000,
      onlineFreeLancers: 5,
    },
    {
      id: 3,
      name: 'Web App Development',
      description:
        'We are a leading web app development company that builds scalable and interactive web applications for global businesses.',
      availableFreelancers: 10,
      minOfferingPrice: 1000,
      maxOfferingPrice: 2000,
      onlineFreeLancers: 5,
    },
    {
      id: 4,
      name: 'UI/UX Design',
      description:
        'We provide innovative and user-friendly UI/UX design services for various digital products and platforms.',
      availableFreelancers: 8,
      minOfferingPrice: 800,
      maxOfferingPrice: 1500,
      onlineFreeLancers: 4,
    },
    {
      id: 5,
      name: 'Content Writing',
      description:
        'We offer high-quality content writing services, including blog posts, articles, copywriting, and more.',
      availableFreelancers: 8,
      minOfferingPrice: 500,
      maxOfferingPrice: 800,
      onlineFreeLancers: 6,
    },
    {
      id: 6,
      name: 'Graphic Design',
      description:
        'We provide creative graphic design solutions for various branding, marketing, and promotional materials.',
      availableFreelancers: 15,
      minOfferingPrice: 800,
      maxOfferingPrice: 2000,
      onlineFreeLancers: 8,
    },
    {
      id: 7,
      name: 'Data Entry',
      description:
        'We offer accurate and efficient data entry services for businesses, including data organization, input, and processing.',
      availableFreelancers: 10,
      minOfferingPrice: 300,
      maxOfferingPrice: 800,
      onlineFreeLancers: 5,
    },
    {
      id: 8,
      name: 'Video Editing',
      description:
        'We provide professional video editing services, including post-production, effects, and audio enhancements.',
      availableFreelancers: 6,
      minOfferingPrice: 1000,
      maxOfferingPrice: 3000,
      onlineFreeLancers: 3,
    },
    {
      id: 9,
      name: 'Social Media Marketing',
      description:
        'We specialize in social media marketing strategies, including content creation, engagement, and analytics.',
      availableFreelancers: 10,
      minOfferingPrice: 800,
      maxOfferingPrice: 1500,
      onlineFreeLancers: 5,
    },
  ]);
  return (
    <ClientOnly>
      <div className="mx-4">
        <div className="flex justify-center ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
            {categories.map((category) => (
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
              hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer
              ">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                    {category.name}
                  </h5>
                </a>

                <div className="mt-8">
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500"> Freelancers</p>
                    </div>

                    <div className="avatar-group -space-x-4">
                      <div className="avatar">
                        <div className="w-6">
                          <img src="https://daisyui.com//images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>

                      <div className="avatar placeholder">
                        <div className="w-6 bg-neutral-focus text-neutral-content">
                          <p className="text-[10px]">
                            +{category.availableFreelancers - 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center mt-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500"> Price</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">
                        {' '}
                        ${category.minOfferingPrice} - $
                        {category.maxOfferingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default page;
