import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import DropDown from "./DropDown";
import Login from "./Login";
const Header = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setLoginStatus] = useState(false);
  const [loginType, setLoginType] = useState("login");

  useEffect(() => {
    checkUser();
  }, []);

  const toggleLogin = (type) => {
    setLoginType(type);
    setLoginStatus(!showLogin);
  };

  const checkUser = () => {
    let cookie = new Cookies();
    let token = cookie.get("token");

    if (token) {
      setUser({ username: "User", name: "user" });
      axios
        .get("https://mango-api-server.herokuapp.com/get-profile-data", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          cookie.set("user", res.data);
          setUser(res.data);
        })
        .catch((err) => {
          setUser(null);
          console.log(err);
        });
    } else {
      setUser(null);
    }
  };
  return (
    <>
      <Popover className="relative bg-white  border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img className="h-10 w-auto sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
              {user === null ? null : (
                <Link
                  to="/dashboard"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Dashboard
                </Link>
              )}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {user === null ? (
                <>
                  <span
                    onClick={() => {
                      toggleLogin("login");
                    }}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    Sign in
                  </span>
                  <span
                    onClick={() => {
                      toggleLogin("register");
                    }}
                    className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </span>
                </>
              ) : (
                <div>
                  {/* <span className="w-10 h-10 bg-indigo-300 rounded-full flex justify-center items-center">
                  W
                </span> */}
                  <DropDown user={user} />
                </div>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    About
                  </Link>

                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </Link>
                  {user === null ? null : (
                    <Link
                      to="/dashbaord"
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Dashboard
                    </Link>
                  )}
                </div>
                <div>
                  {user === null ? (
                    <>
                      <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                      </span>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <span className="text-indigo-600 hover:text-indigo-500">
                          Sign in
                        </span>
                      </p>
                    </>
                  ) : (
                    <div>
                      {" "}
                      <span className="w-24 h-24 bg-indigo-300 rounded-full block">
                        W
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <Login show={showLogin} toggleLogin={toggleLogin} loginType={loginType} />
    </>
  );
};

export default Header;
