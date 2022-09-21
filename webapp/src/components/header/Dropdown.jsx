import React from "react";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header/dropdown/Dropdown.css";

function Dropdown() {
  return (
    <div className="dropdown">
      <Avatar sx={{}}>N</Avatar>
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
}

export default Dropdown;
