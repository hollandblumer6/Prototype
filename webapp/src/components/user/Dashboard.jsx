import React from "react";
import Activity from "./Activity";
import Info from "./Info";
import Stats from "./Stats/Stats";

function Dashboard() {
  return (
    <div>
      <section>
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
