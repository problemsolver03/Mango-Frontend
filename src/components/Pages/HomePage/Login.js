/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import logo from "../../../assets/logo.svg";
import Cookies from "universal-cookie/es6";
import axios from "axios";
import { RefreshIcon } from "@heroicons/react/solid";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginForm = () => {
    setLogin(!login);
  };

  useEffect(() => {
    setOpen(props.show);
    if (props.loginType === "login") {
      setLogin(true);
    } else if (props.loginType === "register") {
      setLogin(false);
    }
  }, [props.show]);

  const registerHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    let postObject = { name, username: email, password };
    axios
      .post("https://mango-api-server.herokuapp.com/signup", postObject)
      .then((res) => {
        let cookies = new Cookies();
        if (res.data.error) {
          setLoading(false);
          setRegisterError(true);
        } else if (res.data.token) {
          cookies.set("token", res.data.token);
          props.history.push("/dashboard");
        }
        setLoading(false);
      })
      .catch((err) => {
        setRegisterError(true);
        setLoading(false);
      });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    let postObject = { username: email, password };
    axios
      .post("https://mango-api-server.herokuapp.com/login", postObject)
      .then((res) => {
        let cookies = new Cookies();
        cookies.set("token", res.data.token);
        if (res.data.token) {
          props.history.push("/dashboard");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
        setLoading(false);
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => {
                        setOpen(false);
                        props.toggleLogin();
                      }}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <img src={logo} alt="logo" className="w-40 block mb-8" />
                    <Dialog.Title className="text-xl font-medium text-gray-900 ">
                      <span className="pb-1">Login or Register</span>
                      <small className="block text-gray-500 text-sm">
                        Login to access your appointments and services
                      </small>
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      {login ? (
                        <form onSubmit={loginHandler}>
                          {loginError ? (
                            <div className="rounded pt-3 pb-3 pl-6 pr-6 bg-orange-100 mb-4">
                              <p className="text-orange-800 font-semibold">
                                Error
                              </p>
                              <p className="text-orange-800">
                                Invalid credentials entered please try again.
                              </p>
                            </div>
                          ) : null}

                          <div>
                            <label className="block mb-1 text-gray-600">
                              Email
                            </label>
                            <input
                              type="text"
                              placeholder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                              required
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Password
                            </label>
                            <input
                              type="password"
                              className="border p-3 w-full rounded"
                              required
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              value={password}
                            />
                          </div>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className=" bg-indigo-700 text-white p-3 w-full rounded hover:bg-indigo-800"
                            >
                              {loading ? (
                                <>
                                  <RefreshIcon className="w-6 h-6 animate-spin mr-3 inline" />
                                  Please wait...
                                </>
                              ) : (
                                <> Login</>
                              )}
                            </button>
                          </div>
                        </form>
                      ) : (
                        <form onSubmit={registerHandler}>
                          {registerError ? (
                            <div className="rounded pt-3 pb-3 pl-6 pr-6 bg-orange-100 mb-4">
                              <p className="text-orange-800 font-semibold">
                                Error
                              </p>
                              <p className="text-orange-800">
                                Sorry there was an error while processing your
                                request.
                              </p>
                            </div>
                          ) : null}
                          <div>
                            <label className="block mb-1 text-gray-600">
                              Name
                            </label>
                            <input
                              type="text"
                              placeholder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                              required
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              value={name}
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Email
                            </label>
                            <input
                              type="text"
                              placeholder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                              required
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Password
                            </label>
                            <input
                              required
                              type="password"
                              className="border p-3 w-full rounded"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              value={password}
                            />
                          </div>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className=" bg-indigo-700 text-white p-3 w-full rounded hover:bg-indigo-800"
                            >
                              {loading ? (
                                <>
                                  <RefreshIcon className="w-6 h-6 animate-spin mr-3 inline" />
                                  Please wait...
                                </>
                              ) : (
                                <> Register</>
                              )}
                            </button>
                          </div>
                        </form>
                      )}

                      <div className="flex justify-between mt-3">
                        <span className=" text-indigo-700 text-sm cursor-pointer hover:text-indigo-900 hover:underline">
                          {login ? (
                            <span onClick={toggleLoginForm}>New user?</span>
                          ) : (
                            <span onClick={toggleLoginForm}>
                              Already registered?
                            </span>
                          )}
                        </span>
                        <span className=" text-indigo-700 text-sm cursor-pointer hover:text-indigo-900 hover:underline">
                          Forgot Password?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default withRouter(Login);
