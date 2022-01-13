import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Rating from "../../Common/Rating";
import { MailIcon } from "@heroicons/react/solid";
import { PhoneOutgoingIcon } from "@heroicons/react/solid";
import Calendar from "react-awesome-calendar";
import ServiceReviews from "./ServiceReviews";
import AddReview from "./AddReview";
import axios from "axios";
import AddAppointment from "./AddAppointments";
import moment from "moment";

const ServiceDetails = (props) => {
  const [show, setShow] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [events, setEvents] = useState(null);
  const toggleReview = () => {
    setShow(!show);
  };

  const toggleAppointment = () => {
    setShowAppointment(!showAppointment);
  };

  const loadServiceDetails = () => {
    let serviceID = props.match.params.serviceId;
    axios
      .post("https://mango-api-server.herokuapp.com/services/get-service", {
        serviceID,
      })
      .then((res) => {
        if (res.data) {
          setServiceDetails(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const loadReviews = () => {
    let serviceID = props.match.params.serviceId;
    axios
      .post(
        "https://mango-api-server.herokuapp.com/reviews/get-reviews-by-service",
        { serviceID }
      )
      .then((res) => {
        if (res.error === undefined) {
          setReviews(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadAppointments = () => {
    let serviceID = props.match.params.serviceId;
    axios
      .post(
        "https://mango-api-server.herokuapp.com/appointments/get-appointments-service",
        { serviceID }
      )
      .then((res) => {
        console.log(res);
        // if (res.error === undefined) {
        //   console.log(res.data);
        // }
        const events = [];

        let appointmentData = res.data;

        const getTodate = (date) => {
          var toDate = moment(date).add(30, "minutes").format();
          return toDate;
        };

        for (let i = 0; i < appointmentData.length; i++) {
          events.push({
            id: appointmentData[i]["_id"],
            color: "red",
            title: "Booked",
            from: appointmentData[i]["date"],
            to: getTodate(appointmentData[i]["date"]),
          });
        }
        setEvents(events);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const triggerAppointMent = (dateRaw) => {
    let time = dateRaw.hour.toString().split(".");

    let date = `${dateRaw.year}-${
      dateRaw.month + 1 < 10 ? `0${dateRaw.month + 1}` : `${dateRaw.month + 1}`
    }-${dateRaw.day + 1 < 10 ? `0${dateRaw.day + 1}` : `${dateRaw.day + 1}`}T${
      time[0].length < 2 ? `0${time[0]}` : time[0]
    }:${time[1] !== undefined ? time[1] * 6 : "00"}:00`;
    setAppointmentDate(date);
    setShowAppointment(true);
  };

  useEffect(() => {
    loadServiceDetails();
    loadReviews();
    loadAppointments();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto  rounded-xl  mt-5">
          <p className="text-lg text-center font-semibold">
            Please wait while reterive the service details.
          </p>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="max-w-7xl mx-auto  rounded-xl border mt-5">
        <div className="bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 h-44 rounded-tl-xl rounded-tr-xl"></div>
        <div className="max-w-6xl mx-auto -mt-12 ">
          <div className="flex items-center">
            <div className="rounded-full">
              <img
                src={serviceDetails.image}
                alt="profileimage"
                className="rounded-full border-8 border-white"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-xl font-semibold pl-4 mt-4">
                {serviceDetails.title}
                <div className="-mt-1">
                  <Rating value={2} />
                </div>
              </h2>
            </div>
            <div className=" mt-4 w-1/3 text-right">
              <button className="bg-gray-100 text-indigo-700 mr-4 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <MailIcon className="h-5 w-5 inline" /> Message
              </button>
              <button className="bg-gray-100 text-indigo-700 p-2 rounded cursor-pointer hover:bg-indigo-600 hover:text-white">
                <PhoneOutgoingIcon className="h-4 w-4 inline-block mr-2 -mt-0" />
                Call
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="col-span-3 border rounded p-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Service Details
              </h3>
              <p className="text-gray-500 text-sm pb-5">
                Find all details related to this service from revies to
                appointment schedules
              </p>
              <hr className="-ml-4 -mr-4 " />
              <div className="flex mt-4 mb-4">
                <div className="w-1/2">
                  <p className="text-gray-600 pb-1 text-sm ">Category</p>
                  <p>{serviceDetails.category}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-600 pb-1 text-sm ">Price</p>
                  <p>USD {serviceDetails.price}</p>
                </div>
              </div>
              <hr className="-ml-4 -mr-4" />
              <div className="mt-5 mb-4">
                <p className="text-gray-600 pb-1 text-sm ">About service</p>
                <p>{serviceDetails.description}</p>
              </div>

              <div className="mt-5 mb-4">
                <p className="text-gray-600 text-sm  pb-2">Reviews</p>
                <ServiceReviews reviews={reviews} />

                <button
                  onClick={toggleReview}
                  className=" bg-indigo-600 p-3 text-white  rounded mt-4"
                >
                  Leave a review
                </button>

                <AddReview
                  show={show}
                  toggleReview={toggleReview}
                  serviceId={props.match.params.serviceId}
                  loadReviews={loadReviews}
                />
              </div>
            </div>
            <div className="col-span-2 border rounded p-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Schedule appointment
              </h3>

              <Calendar
                mode="daily"
                events={events}
                onClickTimeLine={(value) => {
                  triggerAppointMent(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AddAppointment
        serviceID={serviceDetails}
        show={showAppointment}
        toggleAppointment={toggleAppointment}
        appointmentDate={appointmentDate}
        loadServiceDetails={loadServiceDetails}
      />
    </Layout>
  );
};

export default ServiceDetails;
