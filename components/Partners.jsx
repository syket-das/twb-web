'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';

const Partners = () => {
  const [width, setWidth] = React.useState(300);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const settings = {
    slidesToShow: `${3}`,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: 'linear',

    Infinity: true,
  };
  return (
    <>
      <div className=" my-4 mx-auto px-8 flex justify-center items-center ">
        <div className="flex justify-center items-center">
          <h2 className="text-lg font-bold text-center mb-2">Partners</h2>
          <div className="flex-1 max-w-[80vw] md:mx-5">
            <div className="flex gap-5 md:gap-16 flex-wrap">
              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                  alt="partner"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
                  alt="partner"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
                  alt="partner"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
                  alt="partner"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
                  alt="partner"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
                  alt="partner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider w-[80vw] mx-auto"></div>
    </>
  );
};

export default Partners;
