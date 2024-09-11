import { motion, useMotionValue, useSpring } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../../store/auth";
import { clearToken } from "../../store/tokenSlice";

const ResponsiveNavbar = ({ isMenuOpen, setIsMenuOpen, setMagnetActive }) => {
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearToken());
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header className=" md:hidden inset-x-0 top-0 flex relative rounded-full items-center mx-4 justify-between px-[5%] py-3 lg:py-12 z-[999]">
      <Link
        onClick={() => setIsMenuOpen(false)}
        to={"/"}
        className="text-black font-bold text-3xl cursor-pointer flex gap-1 items-center"
      >
        EState
      </Link>
      <button
        className={`relative w-14 h-14 bg-black hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${
          !isMenuOpen ? "gap-y-1" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onPointerEnter={() => setMagnetActive(true)}
        onPointerLeave={() => setMagnetActive(false)}
      >
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
            !isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"
          }`}
        ></span>
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
            !isMenuOpen ? "w-7" : "w-6 mt-[-1px] -rotate-45"
          }`}
        ></span>
        {isMenuOpen ? (
          <motion.div
            layoutId="cursor"
            className="absolute inset-0 bg-red-500 rounded-full"
          ></motion.div>
        ) : null}
      </button>
      <motion.nav
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 500,
        }}
        initial={{
          y: "-100%",
        }}
        animate={{
          y: !isMenuOpen ? "-100%" : "0%",
        }}
        className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]"
      >
        <div className="text-white pt-28 flex px-[5%] flex-col items-center gap-8 h-full font-poppins">
          <div className=" capitalize flex flex-col items-center justify-center font-bold mb-4 gap-2 text-3xl">
            <img src="/man.png" alt="" className=" h-14 w-14" />
            {currentUser?.fullName}
          </div>
          <a
            href="#about"
            data-replace="About"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">About</span>
          </a>

          <a
            data-replace="Features"
            href="#features"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">Features</span>
          </a>

          <a
            href="/property_list"
            data-replace="Properties"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">Properties</span>
          </a>

          {!authenticated && (
            <a href="/login" data-replace="Sign In">
              <span className=" text-3xl" onClick={() => setIsMenuOpen(false)}>
                Log in
              </span>
            </a>
          )}

          {authenticated && (
            <div
              className=" text-3xl text-white rounded-md"
              onClick={handleLogout}
            >
              Logout
            </div>
          )}
        </div>
      </motion.nav>
    </header>
  );
};

export default ResponsiveNavbar;
