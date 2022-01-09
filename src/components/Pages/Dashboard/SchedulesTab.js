import React from "react";
import Calendar from "react-awesome-calendar";
const SchedulesTab = () => {
  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2022-01-09T18:00:00+00:00",
      to: "2022-01-09T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2022-01-09T13:00:00+00:00",
      to: "2022-01-09T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2022-01-09T13:00:00+00:00",
      to: "2022-01-09T20:00:00+00:00",
      title: "This is also another event",
    },
  ];
  return (
    <div className="border p-3">
      <div>
        <h3 className="text-base mt-2 font-semibold">My Schedules</h3>
        <p className="text-sm text-gray-700">
          Add new services or edit your existign services.
        </p>

        <Calendar events={events} />
      </div>
    </div>
  );
};

export default SchedulesTab;
