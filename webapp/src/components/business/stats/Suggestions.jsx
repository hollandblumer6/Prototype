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
              color="#ffffff"
            />
          </div>
          <div className="content"> Sustainable Packaging </div>
        </div>
        <div className="content black">
          {" "}
          <b>2k+</b> supporters{" "}
          <div className="avatar-followers">
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>

            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
          </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            className="pause-btn"
            color="#ffffff"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#ffffff"
          />
        </div>
      </div>
      <div className="suggestions">
        {" "}
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faLeaf}
              size="lg"
              className="pause-btn"
              color="#ffffff"
            />
          </div>
          <p className="content"> Join Platform </p>
        </div>
        <div className="content black">
          {" "}
          <b> 2k+ </b> supporters{" "}
          <div className="avatar-followers">
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "35px", width: "35px" }}
              />{" "}
            </div>

            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "35px", width: "35px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "35px", width: "35px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "35px", width: "35px" }}
              />{" "}
            </div>
          </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            className="pause-btn"
            color="#ffffff"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#ffffff"
          />
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faCubesStacked}
              size="lg"
              className="pause-btn"
              color="#ffffff"
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
                sx={{ height: "30px", width: "30px" }}
                className="supporter"
              />{" "}
            </div>

            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "30px", width: "30px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "30px", width: "30px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "30px", width: "30px" }}
              />{" "}
            </div>
          </div>
        </p>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            className="pause-btn"
            color="#ffffff"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
