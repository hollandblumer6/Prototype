import React from "react";
import "../../../styles/user/activity/suggestion/suggestion.css";

function Suggestion({ user, company, suggestion, date }) {
  return (
    <div className="suggestions">
      <div className="suggestion">
        <div>{user}</div>
        <div>{company} </div>
        <div>{suggestion} </div>
        <div> {date}</div>
      </div>
    </div>
  );
}

export default Suggestion;
