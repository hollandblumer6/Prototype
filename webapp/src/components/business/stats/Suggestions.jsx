import React from "react";
import "../../../styles/business/stats/suggestions/suggestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBoxOpen,
  faCubesStacked,
  faCirclePlus,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions-container">
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faBoxOpen}
              size="lg"
              className="pause-btn"
              color="#f6f6f6"
            />
          </div>
          <p className="content"> Sustainable Packaging </p>
        </div>
        <p className="content black">
          {" "}
          <b>2k+</b> supporters{" "}
        </p>
      </div>
      <div className="suggestions">
        {" "}
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faLeaf}
              size="lg"
              className="pause-btn"
              color="#f6f6f6"
            />
          </div>
          <p className="content"> Join Platform </p>
        </div>
        <p className="content black">
          {" "}
          <b> 2k+ </b> supporters{" "}
        </p>
      </div>
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faCubesStacked}
              size="lg"
              className="pause-btn"
              color="#f6f6f6"
            />
          </div>

          <p className="content">Less sugar </p>
        </div>
        <p className="content black">
          {" "}
          <b>2k+</b>
          supporters{" "}
          <div className="avatar-followers">
            <div className="avatar-follower">
              {" "}
              <Avatar
                sx={{ height: "35px", width: "35px" }}
                style={{
                  border: "1px solid #95CFD9",
                }}
              />{" "}
            </div>

            <div className="avatar-follower">
              {" "}
              <Avatar
                sx={{ height: "35px", width: "35px" }}
                style={{
                  border: "1px solid #95CFD9",
                }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                sx={{ height: "35px", width: "35px" }}
                style={{
                  border: "1px solid #95CFD9",
                }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                sx={{ height: "35px", width: "35px" }}
                style={{
                  border: "1px solid #95CFD9",
                }}
              />{" "}
            </div>
          </div>
        </p>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            className="pause-btn"
            color="#f6f6f6"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#f6f6f6"
          />
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
