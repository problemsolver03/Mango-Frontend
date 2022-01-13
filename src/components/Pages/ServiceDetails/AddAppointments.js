/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Cookies from "universal-cookie";
import axios from "axios";

const AddAppointment = (props) => {
  const [open, setOpen] = useState(props.show);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cancelButtonRef = useRef(null);
  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);

  const closeHandler = () => {
    props.toggleAppointment();
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let cookie = new Cookies();
    let token = cookie.get("token");

    let postObject = {
      date: props.appointmentDate,
      serviceID: props.serviceID._id,
    };

    axios
      .post(
        "https://mango-api-server.herokuapp.com/appointments/add-appointment",
        postObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          setError(true);
        } else {
          props.toggleAppointment();
          props.loadServiceDetails();
          setError(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeHandler}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  lg:w-1/2 w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h2 className="text-xl font-semibold mb-4">
                  Confirm appointment
                </h2>
                <form onSubmit={handleSubmit}>
                  {error ? (
                    <div className=" bg-red-300 text-red-600">
                      Sorry there was an error while adding your review
                    </div>
                  ) : null}

                  <div className="">
                    <div>
                      <p>
                        Your appointment will be scheduled for{" "}
                        {props.appointmentDate}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50   sm:flex sm:flex-row-reverse -mx-6 p-5 -mb-5 mt-8">
                    <button
                      type="sumit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      disabled={loading ? true : false}
                    >
                      {loading ? "Please wait.." : "Confirm"}
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={closeHandler}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddAppointment;
