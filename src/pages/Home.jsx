import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/auth";
import { clearToken } from "../store/tokenSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/HomeComponents/Navbar";
import Features from "../components/HomeComponents/Features";
import About from "../components/HomeComponents/About";
import FeedBacks from "../components/HomeComponents/Feedbacks";
import Footer from "../components/HomeComponents/Footer";
import ResponsiveNavbar from "../components/HomeComponents/ResponsiveNavbar";
import { DragCards } from "../components/HomeComponents/DragCards";

const Home = () => {
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearToken());
  };

  return (
    <div className="">
      <Navbar />

      <ResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
      />

      <div className="flex-col md:flex-row flex gap-2 px-6 my-4">
        <img
          src="/image1.jpg"
          alt=""
          className=" md:w-2/3 rounded-lg shadow-lg"
        />
        <div className=" flex flex-col gap-2">
          <img src="/image2.jpg" alt="" className="rounded-lg shadow-lg" />
          <img src="/image3.jpg" alt="" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <About />

      <Features />

      <div className="text-5xl mb-4 mt-10 font-bold text-center">Gallery</div>
      <DragCards />

      <FeedBacks />

      <Footer />
    </div>
  );
};

export default Home;
