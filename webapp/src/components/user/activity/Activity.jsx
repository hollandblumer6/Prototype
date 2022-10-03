import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import "../../../styles/user/activity/activity.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../../aws-exports";
import { listTodos } from "../../../graphql/queries";
Amplify.configure(awsconfig);

function Activity() {
  /*   const suggestionList = [
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
  const user = "@hollandblumer"; */

  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    try {
      const suggestionData = await API.graphql(graphqlOperation(listTodos));
      const suggestionList = suggestionData.data.listTodos.items;
      console.log("suggestion list", suggestionList[0]);
      setSuggestions(suggestionList);
    } catch (err) {
      console.log("error on fetching suggestions", err);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="activity">
      <div className="activity-buttons">
        <button className="button"> Recent Activity </button>
        <button className="button-inactive"> Badges </button>
      </div>
      <div className="actual-activity">
        {suggestions.map((suggestion, idx) => (
          <div>
            <Suggestion
              user={suggestion.name}
              company={suggestion.name}
              suggestion={suggestion.name}
              date={suggestion.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
