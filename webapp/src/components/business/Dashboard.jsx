import React from "react";
import Info from "./info/Info";
import Stats from "./stats/Stats";

import Activity from "./activity/Activity";
import "../../styles/business/dashboard/dashboard.css";

function Dashboard() {
  return (
    <div>
      <section>
        {" "}
        <article>
          <Info />
        </article>
        <article>
          <Stats />
        </article>
      </section>
      <section>
        <Activity />
      </section>
    </div>
  );
}

export default Dashboard;
