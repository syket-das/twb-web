'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';

const Partners = () => {
  const [width, setWidth] = React.useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: `${width > 768 ? 7 : 3}`,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
  };
  return (
    <div className=" my-4 md:w-[90vw] mx-auto px-8  ">
      <h2 className="text-3xl font-bold text-center mb-2">Our Partners</h2>
      <Slider {...settings}>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
            alt="partner"
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/telstra-logo.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
            alt="partner"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
            alt="partner"
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-[100px] h-[50px]"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
            alt="partner"
          />
        </div>
      </Slider>
      <div className="divider"></div>
    </div>
  );
};

export default Partners;
