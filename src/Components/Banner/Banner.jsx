import React from "react";
import BannerImg from "../../assets/website/footer-pattern.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px]
    flex justify-center 
    items-center py-12
    sm:py-0"
    >
      <div className="container">
        <div className="grid
        grid-cols-1 sm:grid-cols-2
        gap-6 items-center
        ">
        <div data-aos="zoom-in">
            <img 
            src={BannerImg}
            alt="" 
            className="max-w-[400px]
            h-[350px] w-full mx-auto
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover"
            />
        </div>
        <div className="flex flex-col justify-center
        gap-6 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Winter Sale upto 50% Off
          </h1>
          <p className="text-sm text-gray-500
          tracking-wide leading-5">
            Printed shirts come in various styles, from casual to formal, making them suitable for different occasions and dress codes. These shirts, including graphic men's shirts, are popular among men due to their trendy and eye-catching designs. The men's shirts online allow artists and designers to showcase their creativity and convey messages or art to a broader audience
          </p>
          <div className="flex flex-col gap-4">
          <div data-aos="fade-up" className="flex items-center gap-4">
            <GrSecure 
            className="text-4xl h-12 w-12 shadow-sm
            p-4 rounded-full bg-violet-100
            dark:bg-violet-400"/>
            <p>Quality Products</p>
          </div>
          <div data-aos="fade-up" className="flex
          items-center gap-4">
            <IoFastFood className="text-4xl h-12
            w-12 shadow-sm p-4 rounded-full
            bg-orange-100
            dark:bg-orange-400"/>
            <p>Fast Delivery</p>
          </div>
          <div data-aos="fade-up" className="flex
          items-center gap-4">
            <GiFoodTruck className="text-4xl h-12 w-12
            shadow-sm p-4 rounded-full bg-green-100
            dark:bg-green-400" />
            <p>Easy Payment Method</p>
          </div>
          <div data-aos="fade-up" className="flex
          items-center gap-4">
            <GiFoodTruck className="text-4xl h-12 w-12
            shadow-sm p-4 rounded-full bg-green-100
            dark:bg-yellow-400" />
            <p>Get Offers</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
