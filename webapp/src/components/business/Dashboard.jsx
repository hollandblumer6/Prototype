import React from "react";
import Info from "./info/Info";
import Suggestions from "./stats/Suggestions";
import "../../styles/business/dashboard/dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="profile-info">
        {" "}
        <Info />
        <Suggestions />
      </div>
    </div>
  );
}

export default Dashboard;
