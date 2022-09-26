import React from "react";
import Info from "./info/Info";
import Stats from "./stats/Stats";

import Activity from "./activity/Activity";
import "../../styles/business/dashboard/dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="profile-info">
        {" "}
        <Info />
        <Stats />
      </div>
      <Activity />
    </div>
  );
}

export default Dashboard;
