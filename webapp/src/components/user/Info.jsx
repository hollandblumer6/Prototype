import React from "react";
import "../../styles/user/profile.css";
import "../../styles/user/info/info.css";
import Avatar from "@mui/material/Avatar";

function Info() {
  return (
    <div className="info">
      <div className="profile">
        <div>
          <Avatar sx={{ height: "70px", width: "70px" }} />{" "}
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
