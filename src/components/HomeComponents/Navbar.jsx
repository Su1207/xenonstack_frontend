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
  };

  return (
    <div className=" text-black py-4 text-sm font-poppins mx-8 md:block hidden">
      <div className=" flex items-center justify-between">
        <div
          className=" text-2xl font-bold pl-5 cursor-pointer"
          onClick={handleLogoClick}
        >
          Estate
        </div>
        <div className=" flex items-center gap-10">
          <Link>
            <span>Features</span>
          </Link>
          <Link>
            <span>Team</span>
          </Link>
          <Link>
            <span>Properties</span>
          </Link>

          {authenticated ? (
            <div className=" capitalize">{currentUser?.fullName}</div>
          ) : (
            <Link
              to="/login"
              className=" bg-cyan-500 text-white  rounded-full shadow-lg px-4 py-3 text-xs hover:bg-[#fc7754] transition-all duration-300 ease-in-out"
            >
              Login
            </Link>
          )}

          {authenticated && (
            <button
              className=" p-2.5 bg-black outline-none text-white rounded-md"
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
