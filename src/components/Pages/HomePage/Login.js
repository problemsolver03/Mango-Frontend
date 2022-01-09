/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import logo from "../../../assets/logo.svg";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);

  const toggleLoginForm = () => {
    setLogin(!login);
  };

  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);

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
                        <form>
                          <div>
                            <label className="block mb-1 text-gray-600">
                              Email
                            </label>
                            <input
                              type="text"
                              placeHolder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Password
                            </label>
                            <input
                              type="password"
                              className="border p-3 w-full rounded"
                            />
                          </div>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className=" bg-indigo-700 text-white p-3 w-full rounded hover:bg-indigo-800"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      ) : (
                        <form>
                          <div>
                            <label className="block mb-1 text-gray-600">
                              Name
                            </label>
                            <input
                              type="text"
                              placeHolder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Email
                            </label>
                            <input
                              type="text"
                              placeHolder="abc@gmail.com"
                              className="border p-3 w-full rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <label className="block mb-1 text-gray-600">
                              Password
                            </label>
                            <input
                              type="password"
                              className="border p-3 w-full rounded"
                            />
                          </div>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className=" bg-indigo-700 text-white p-3 w-full rounded hover:bg-indigo-800"
                            >
                              Register
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

export default Login;
