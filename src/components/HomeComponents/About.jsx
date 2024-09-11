import React from "react";
import CountUp from "react-countup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#000] text-white mt-8 py-20 px-4 md:px-8 lg:px-20 mb-10"
    >
      <div className="text-3xl md:text-5xl text-center mb-16 font-bold">
        Know More About Us
      </div>

      <div className="flex text-justify flex-col-reverse lg:items-center gap-20 md:mx-5 lg:mx-10 sm:px-4">
        <div className=" text-white w-full">
          Welcome to
          <span className="font-semibold ">XYZ Company</span>, where we are
          dedicated to helping you find your dream property. Whether you're
          looking for your first home, an investment opportunity, or a rental
          property, our team of experienced professionals is here to guide you
          every step of the way. With years of expertise in the real estate
          market, we pride ourselves on providing personalized service and
          in-depth market insights, ensuring that you make informed decisions.
          At <span className="font-semibold ">XYZ Company</span>, we value
          trust, transparency, and client satisfaction above all. Let us help
          you turn your property dreams into reality.
        </div>

        <div className="flex sm:flex-row flex-col bg-[#fc7754] text-white justify-around gap-10 px-4 md:px-8 lg:px-20 py-8 md:py-12 rounded-3xl md:gap-14">
          <div className="flex items-center flex-col">
            <div className="text-3xl lg:text-5xl  font-bold">
              <CountUp delay={3} end={4000} />+
            </div>
            <div className="text-base lg:text-2xl font-light">
              Client Globally
            </div>
          </div>
          <div className="w-0 md:block hidden border border-gray-300"></div>
          <div className="flex items-center flex-col">
            <div className="text-3xl lg:text-5xl  font-bold">
              <CountUp delay={3} end={60} />%
            </div>
            <div className="text-base lg:text-2xl font-light">
              Repeat Customers
            </div>
          </div>
          <div className="w-0 border md:block hidden border-gray-300"></div>

          <div className="flex justify-center items-center flex-col">
            <div className="text-3xl lg:text-5xl  font-bold">
              <CountUp delay={3} end={40} />+
            </div>
            <div className="text-base lg:text-xl font-light">Partners</div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className=" py-3 px-8 flex items-center gap-4 text-sm font-semibold cursor-pointer rounded-md bg-[#45ffc7] hover:bg-white text-black hover:text-black transition-all duration-200 ease-in-out">
          KNOW MORE ...
          <ArrowForwardIosIcon
            sx={{
              fontSize: "12px",
              bgcolor: "transparent",
            }}
            className="animate-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
