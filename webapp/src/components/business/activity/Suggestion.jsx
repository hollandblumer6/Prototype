import React from "react";
import "../../../styles/user/activity/suggestion/suggestion.css";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBoxOpen,
  faCubesStacked,
  faEllipsis,
  faPlusCircle,
  faShareNodes,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function Suggestion({ user, company, suggestion, date }) {
  return (
    <div className="activity-suggestions">
      <div className="suggestion">
        <div className="suggestion-content">
          {/*   <div className="user name">
            {" "}
            <Avatar
              sx={{ height: "35px", width: "35px" }}
              style={{ border: "1px solid #f1f1f1" }}
              src="https://mma.prnewswire.com/media/1831942/noosa_Branding_Update_Logos_Horizontal_Lettering_Logo.jpg?p=publish"
            />{" "}
            <div className="text left">{user}</div>
          </div>  */}
          <p className="bold"> Supports </p>
          <div className="brand name">
            {" "}
            <Avatar
              sx={{ height: "35px", width: "35px" }}
              style={{ border: "1px solid #f1f1f1" }}
              src="https://www.spacex.com/static/images/share.jpg"
            />{" "}
            <div className="text left">{company} </div>{" "}
          </div>
          <p className="bold"> with </p>
          <div className="idea name ">
            {" "}
            <div className="avatar">
              {" "}
              <FontAwesomeIcon
                icon={faRocket}
                size="lg"
                className="pause-btn"
                color="#f6f6f6"
              />
            </div>{" "}
            <div className="text">{suggestion}</div>{" "}
          </div>
          <p className="bold"> since </p>
          <div className="text left"> {date}</div>
        </div>
        <div className="like-share">
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="lg"
            className="pause-btn"
            color="#272626"
          />

          <FontAwesomeIcon
            icon={faShareNodes}
            size="lg"
            className="pause-btn"
            color="#272626"
          />
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            className="pause-btn"
            color="#272626"
          />
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
