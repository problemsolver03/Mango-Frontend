import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import AddService from "./AddService";
import EditService from "./EditService";

const ServiceTab = (props) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleService, setToggleService] = useState(false);
  const [toggleEditService, setToggleEditService] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleAddService = () => {
    setToggleService(!toggleService);
  };
  const toggleEdService = (service) => {
    if (service) {
      setSelectedService(service);
    }
    setToggleEditService(!toggleEditService);
  };
  const getServices = () => {
    setTimeout(() => {
      let cookie = new Cookies();
      let token = cookie.get("token");
      let user = cookie.get("user");

      axios
        .post(
          "https://mango-api-server.herokuapp.com/services/services-by-user",
          { user: user._id },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          if (res.data) {
            setServices(res.data);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <div className="border p-3">
      <div className="mb-4">
        <h3 className="text-base mt-2 font-semibold">
          List of your active services
        </h3>
        <p className="text-sm text-gray-700">
          Add new services or edit your existign services.
        </p>

        <div className="text-right -mt-12">
          <button
            type="button"
            onClick={toggleAddService}
            className=" bg-indigo-600 text-white p-3 rounded mb-4"
          >
            Add New Service
          </button>
        </div>
      </div>
      {loading ? <p>Please wait while we retrieve the details</p> : null}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {services.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3"
                      >
                        Title & Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category & Price
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {services.map((service, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={service.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4 max-w-xl block whitespace-nowrap break-all overflow-hidden text-ellipsis">
                              <div className="text-sm font-medium text-gray-900">
                                {service.title}
                              </div>
                              <div className="text-sm text-gray-500  break-all text-ellipsis whitespace-nowrap">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {service.category}
                          </div>
                          <div className="text-sm text-gray-500">
                            Price starting from : {service.price}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <span
                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                            onClick={() => {
                              toggleEdService(service);
                            }}
                          >
                            Edit
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <AddService show={toggleService} toggleAddService={toggleAddService} />
      {selectedService !== null ? (
        <EditService
          toggleAddService={toggleEdService}
          show={toggleEditService}
          selectedService={selectedService}
        />
      ) : null}
    </div>
  );
};

export default ServiceTab;
