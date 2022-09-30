import React from "react";
import Suggestion from "./Suggestion";
import "../../../styles/user/activity/activity.css";

function Activity() {
  const suggestionList = [
    {
      company: "SpaceX",
      suggestion: "Space Cleanup Project",
      date: "09/21/2022",
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
  const user = "noosa";
  return (
    <div className="activity">
      <div className="activity-buttons">
        <div className="activity-buttons">
          <button className="button"> Recent Activity </button>
        </div>
      </div>
      <div className="actual-activity">
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
