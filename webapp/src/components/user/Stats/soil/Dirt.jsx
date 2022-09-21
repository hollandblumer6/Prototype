import React from "react";
import "../../../../styles/user/stats/dirt/dirt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";

function Dirt() {
  return (
    <div className="dirt-container">
      <div className="dirt">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <div className="more-dirt">
        <FontAwesomeIcon icon={faEllipsis} color="white" />
      </div>
    </div>
  );
}

export default Dirt;
