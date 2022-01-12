import React, { useState, useEffect } from "react";
import AppointmentsTab from "./AppointmentsTab";
import ReviewsTab from "./ReviewsTab";
import SchedulesTab from "./SchedulesTab";
import ServiceTab from "./ServiceTab";
import Cookies from "universal-cookie";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userData, setUserData] = useState(null);

  const menuList = [
    {
      name: "My Services",
      id: 1,
    },
    {
      name: "My Reviews",
      id: 2,
    },
    {
      name: "My Appointments",
      id: 3,
    },
    {
      name: "My Schedules",
      id: 4,
    },
  ];

  const activateTab = (tabid) => {
    setActiveTab(tabid);
  };

  useEffect(() => {
    let cookie = new Cookies();
    let user = cookie.get("user");
    setUserData(user);
  }, []);
  return (
    <div className="mt-8">
      <ul className="flex bg-gray-100  rounded p-3">
        {menuList.map((menu, i) => {
          if (menu.id === activeTab) {
            return (
              <li
                className=" cursor-pointer  p-2 rounded bg-indigo-500 text-white mr-3"
                key={i}
                onClick={() => {
                  activateTab(menu.id);
                }}
              >
                {menu.name}
              </li>
            );
          }
          return (
            <li
              key={i}
              className=" cursor-pointer p-2 hover:bg-indigo-500 hover:text-white hover:rounded mr-3"
              onClick={() => {
                activateTab(menu.id);
              }}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>

      {activeTab === 1 ? <ServiceTab user={userData} /> : null}
      {activeTab === 2 ? <ReviewsTab user={userData} /> : null}
      {activeTab === 3 ? <AppointmentsTab user={userData} /> : null}
      {activeTab === 4 ? <SchedulesTab user={userData} /> : null}
    </div>
  );
};

export default Tabs;
