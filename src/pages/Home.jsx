import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/auth";
import { clearToken } from "../store/tokenSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/HomeComponents/Navbar";
import Features from "../components/HomeComponents/Features";
import About from "../components/HomeComponents/About";
import FeedBacks from "../components/HomeComponents/Feedbacks";
import Footer from "../components/HomeComponents/Footer";

const Home = () => {
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearToken());
  };

  console.log(authenticated, currentUser);
  return (
    <div className="">
      <Navbar />

      <div className="flex gap-2 px-6 my-4">
        <img src="/image1.jpg" alt="" className=" w-2/3 rounded-lg shadow-lg" />
        <div className=" flex flex-col gap-2">
          <img src="/image2.jpg" alt="" className="rounded-lg shadow-lg" />
          <img src="/image3.jpg" alt="" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <About />

      <Features />

      <FeedBacks />

      <Footer />
    </div>
  );
};

export default Home;
