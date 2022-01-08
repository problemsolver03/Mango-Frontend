import React from "react";

import ProfileCard from "./ProfileCard";

const Recommended = () => {
  const users = [1, 2, 3, 4, 5, 6];

  return (
    <section className="max-w-7xl mx-auto">
      <h3 className="text-center mt-10 mb-4 text-2xl">Top rated experts</h3>

      <div className="grid  md:grid-cols-3 grid-cols-1">
        {users.map((user, i) => {
          return <ProfileCard key={i} />;
        })}
      </div>
    </section>
  );
};

export default Recommended;
