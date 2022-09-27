import React from "react";
import "../../../styles/user/activity/suggestion/suggestion.css";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBoxOpen,
  faCubesStacked,
} from "@fortawesome/free-solid-svg-icons";

function Suggestion({ user, company, suggestion, date }) {
  return (
    <div className="suggestions">
      <div className="suggestion">
        <div className="user name">
          {" "}
          <Avatar src="https://mma.prnewswire.com/media/1831942/noosa_Branding_Update_Logos_Horizontal_Lettering_Logo.jpg?p=publish" />{" "}
          {user}
        </div>
        <p className="bold"> supports </p>
        <div className="brand name">
          {" "}
          <Avatar src="https://pbs.twimg.com/profile_images/459053581052547072/BujcjGOX_400x400.jpeg" />{" "}
          {company}{" "}
        </div>
        <p className="bold"> with </p>
        <div className="idea name ">
          {" "}
          <div className="avatar">
            {" "}
            <FontAwesomeIcon
              icon={faLeaf}
              size="lg"
              className="pause-btn"
              color="#272626"
            />
          </div>{" "}
          {suggestion}{" "}
        </div>
        <p className="bold"> since </p>
        <div className="bold"> {date}</div>
      </div>
    </div>
  );
}

export default Suggestion;
