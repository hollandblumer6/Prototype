import React from "react";
import Suggestion from "./Suggestion";
import "../../../styles/user/activity/activity.css";

function Activity() {
  const suggestionList = [
    {
      company: "Kiawah Island Club",
      suggestion: "Recyling on the beach",
      date: "07/11/2021",
    },
    {
      company: "Kiawah Island Club",
      suggestion: "Recyling on the beach",
      date: "07/11/2021",
    },
    {
      company: "Kiawah Island Club",
      suggestion: "Recyling on the beach",
      date: "07/11/2021",
    },
    {
      company: "Kiawah Island Club",
      suggestion: "Recyling on the beach",
      date: "07/11/2021",
    },
  ];
  const user = "@hollandblumer";
  return (
    <div className="activity">
      <div className="activity-buttons">
        <button className="button"> RECENT ACTIVITY </button>
        <button className="button"> SUPPORT </button>
        <button className="button"> DONATIONS </button>
        <button className="button"> ACHIEVEMENTS </button>
      </div>
      <div>
        {suggestionList.map((key, idx) => (
          <div>
            <Suggestion
              user={user}
              company={key.company}
              suggestion={key.suggestion}
              date={key.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
