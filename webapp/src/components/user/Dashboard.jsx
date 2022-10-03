import React, { useState, useEffect } from "react";
import Activity from "./activity/Activity";
import Info from "./Info";
import Stats from "./Stats/Stats";
import { Auth } from "aws-amplify";

function Dashboard() {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    try {
      let info = await Auth.currentSession();
      let userName = info.idToken.payload["cognito:username"];
      setUser(userName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section>
        <article>
          <Info user={user} />
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
