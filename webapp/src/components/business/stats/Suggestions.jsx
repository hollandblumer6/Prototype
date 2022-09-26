import React from "react";
import "../../../styles/business/stats/suggestions/suggestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBoxOpen,
  faCubesStacked,
} from "@fortawesome/free-solid-svg-icons";

function Suggestions() {
  return (
    <div className="suggestions-container">
      <div className="suggestion">
        <div className="avatar-circle">
          <FontAwesomeIcon
            icon={faBoxOpen}
            size="lg"
            className="pause-btn"
            color="#f6f6f6"
          />
        </div>
        <p> Sustainable Packaging </p>
        <p>
          {" "}
          <b>2k+</b> supporters{" "}
        </p>
      </div>
      <div className="suggestion">
        {" "}
        <div className="avatar-circle">
          <FontAwesomeIcon
            icon={faLeaf}
            size="lg"
            className="pause-btn"
            color="#f6f6f6"
          />
        </div>
        <p> Join Platform </p>
        <p>
          {" "}
          <b>2k+</b> supporters{" "}
        </p>
      </div>
      <div className="suggestion">
        <div className="avatar-circle">
          <FontAwesomeIcon
            icon={faCubesStacked}
            size="lg"
            className="pause-btn"
            color="#f6f6f6"
          />
        </div>
        <p> Less sugar </p>
        <p>
          {" "}
          <b>2k+</b> supporters{" "}
        </p>
      </div>
    </div>
  );
}

export default Suggestions;
