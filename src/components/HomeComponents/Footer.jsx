import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/property_list");
  };
  return (
    <div className="bg-black pt-80">
      <div className=" py-[6rem] px-6 md:px-8 lg:px-16 text-white">
        <div className="flex sm:flex-row flex-col gap-10 sm:gap-28 mb-[4rem] justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">LET'S TALK</div>
            <div className="text-base sm:text-left text-center font-extralight tracking-wider">
              Empowering You to Find Your Perfect Home with Trusted, Tailored
              Real Estate Solutions.
            </div>
            <div className="mt-4 py-3 px-6 text-base font-semibold cursor-pointer w-fit rounded-sm bg-[#40eab7] hover:bg-white text-black transition-all duration-200 ease-in-out">
              GET IN TOUCH
            </div>
          </div>
        </div>
        <div className="border-gray-500 border h-0"></div>

        <div className="mt-8 md:mt-[6rem] flex sm:flex-row flex-col justify-center flex-wrap items-center  sm:items-start gap-8 sm:gap-0 sm:justify-around">
          <div className="bg-transparent flex flex-col items-center sm:items-start text-sm lg:text-base gap-5">
            <div className=" ">ABOUT US</div>
            <div className=" ">CONTACT US</div>
            <div className="cursor-pointer" onClick={handleClick}>
              PROPERTIES
            </div>
          </div>

          <div className="bg-transparent flex items-center sm:items-start flex-col text-sm lg:text-base gap-5">
            <div className=" ">WHAT WE DO</div>
            <div className=" ">CASE STUDIES</div>
          </div>

          <div className=" flex flex-col items-center sm:items-start text-sm lg:text-base gap-5">
            <div className=" ">ADDRESSES</div>
            <div className="text-sm text-center sm:text-left">
              <div>MUMBAI</div>
              <div className="text-xs text-gray-300">
                788, 7TH FLOOR, LODHA
                <br />
                788, 7TH FLOOR, LODHA
                <br />
                NEAR THANE, MUMBAI - 400072
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col items-center gap-2">
            <img
              src="/facebook.png"
              alt=""
              className="sm:h-10 h-8 sm:w-10 w-8 p-2 cursor-pointer hover:bg-[#126bfb] transition-all duration-300 ease-in-out rounded-sm"
            />
            <img
              src="/instagram.png"
              alt=""
              className="sm:h-10 h-8 sm:w-10 w-8 p-2 cursor-pointer hover:bg-[#126bfb] transition-all duration-300 ease-in-out rounded-sm"
            />
            <img
              src="/twitter.png"
              alt=""
              className="sm:h-10 h-8 sm:w-10 w-8 p-2 cursor-pointer hover:bg-[#126bfb] transition-all duration-300 ease-in-out rounded-sm"
            />
            <img
              src="/linkedin.png"
              alt=""
              className="sm:h-10 h-8 sm:w-10 w-8 p-2 cursor-pointer hover:bg-[#126bfb] transition-all duration-300 ease-in-out rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
