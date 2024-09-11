import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../../store/auth";
import { clearToken } from "../../store/tokenSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearToken());
    navigate("/");
  };

  return (
    <div className=" text-black py-4 text-sm font-poppins mx-8 md:block hidden">
      <div className=" flex items-center justify-between">
        <div
          className=" text-3xl font-bold pl-5 cursor-pointer"
          onClick={handleLogoClick}
        >
          EState
        </div>
        <div className=" flex items-center text-lg gap-10">
          <a href="#about" data-replace="About">
            <span>About</span>
          </a>
          <a href="#features" data-replace="Features">
            <span>Features</span>
          </a>
          <a href="/property_list" data-replace="Properties">
            <span>Properties</span>
          </a>

          {authenticated ? (
            <div className=" capitalize flex items-center gap-2">
              <img src="/man.png" alt="" className=" h-8 w-8" />
              {currentUser?.fullName}
            </div>
          ) : (
            <Link
              to="/login"
              className=" bg-cyan-700 text-white  rounded-lg shadow-lg px-4 py-2 text-sm hover:bg-[#fc7754] transition-all duration-300 ease-in-out"
            >
              Login
            </Link>
          )}

          {authenticated && (
            <button
              className=" px-2.5 py-2 text-sm bg-orange-600 outline-none text-white rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
