import React from "react";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header/dropdown/Dropdown.css";

function Dropdown() {
  return (
    <div className="dropdown">
      <Avatar
        sx={{}}
        src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/53767737_2574304719310660_7428725522793758720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=y9lZk4B0LOEAX_L4n_I&_nc_ht=scontent-atl3-1.xx&oh=00_AT80zWmUYcgGnhB1MCGN0kkcg4_XctQTWiqqYxD9P_qCNA&oe=6357F885"
      />
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
}

export default Dropdown;
