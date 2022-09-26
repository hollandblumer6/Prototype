import React from "react";
import "../../styles/user/profile.css";
import "../../styles/user/info/info.css";
import Avatar from "@mui/material/Avatar";

function Info() {
  return (
    <div className="info">
      <div className="profile">
        <div>
          <Avatar
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/53767737_2574304719310660_7428725522793758720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=y9lZk4B0LOEAX_L4n_I&_nc_ht=scontent-atl3-1.xx&oh=00_AT80zWmUYcgGnhB1MCGN0kkcg4_XctQTWiqqYxD9P_qCNA&oe=6357F885"
            sx={{ height: "82px", width: "82px" }}
            style={{
              border: "0.1px solid lightgray",
            }}
          />{" "}
        </div>
        <div>
          <p> @hollandblumer </p>
          <div className="buttons">
            <button> Support </button>
            <button> ... </button>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="cell"> 203 Brands </div>
        <div className="cell"> Strength </div>
        <div className="cell"> 2k High Fives </div>
        <div className="cell"> Charlotte, NC </div>
      </div>
    </div>
  );
}

export default Info;
