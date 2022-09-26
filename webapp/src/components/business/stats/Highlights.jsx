import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

function Highlights() {
  return (
    <div>
      {" "}
      <div className="suggestions-container-brand">
        <h2> Brand Highlights </h2>
        <div className="suggestion">
          <FontAwesomeIcon icon={faMugHot} size="lg" className="pause-btn" />
          <p> Recyle cups </p>
          <p>
            {" "}
            <b>2k+</b> supporters{" "}
          </p>
        </div>
        <div className="suggestion">
          {" "}
          <FontAwesomeIcon icon={faMugHot} size="lg" className="pause-btn" />
        </div>
        <div className="suggestion"></div>
      </div>
    </div>
  );
}

export default Highlights;
