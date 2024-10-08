import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { setUser } from "../store/auth";
import { setToken } from "../store/tokenSlice";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/register`,
        {
          fullName,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const token = response.data;
        const decodedToken = jwtDecode(token);
        dispatch(setUser(decodedToken));
        dispatch(setToken(token));
        toast.success("Register successful!");

        navigate("/");
        setfullName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in registering");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  //   if (loading) {
  //     return (
  //       <div className="h-[90vh] w-full flex justify-center items-center">
  //         <svg
  //           className="animate-spin h-5 w-5 mr-3"
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //         >
  //           <circle
  //             className="opacity-25"
  //             cx="12"
  //             cy="12"
  //             r="10"
  //             stroke="currentColor"
  //             strokeWidth="4"
  //           ></circle>
  //           <path
  //             className="opacity-75"
  //             fill="currentColor"
  //             d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.314 2.686 6 6 6v-2.709z"
  //           ></path>
  //         </svg>
  //         <div className="font-semibold">loading</div>
  //       </div>
  //     );
  //   }

  return (
    <>
      <div className="h-screen w-full flex md:flex-row flex-col-reverse overflow-hidden relative">
        <Link
          to={"/"}
          className="text-black font-bold text-2xl cursor-pointer flex gap-1 items-center absolute top-6 left-6"
        >
          <div className="text-[#126bfb] text-5xl">E</div>state
        </Link>
        <div className="w-full md:w-2/5 h-full p-5 sm:p-8 bg-[#FFFFFF]">
          <div className=" h-full w-full flex flex-col justify-center items-center">
            <div className=" text-black w-[90%] sm:w-auto md:w-[90%] lg:w-[80%]">
              <div className=" text-3xl text-center font-bold mb-4">
                Welcome!
              </div>
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      onChange={(e) => setfullName(e.target.value)}
                      className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Not a member?{" "}
              <span
                onClick={handleClick}
                className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500 transition-all duration-300 ease-in"
              >
                Login
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full">
          <img src="/image1.jpg" alt="" className=" h-full" />
        </div>
      </div>
    </>
  );
}
