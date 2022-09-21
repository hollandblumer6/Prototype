import React from "react";
import "../../styles/user/profile.css";
import "../../styles/user/info/info.css";
import Avatar from "@mui/material/Avatar";

function Info() {
  return (
    <>
      <div>
        <div>
          <Avatar />{" "}
        </div>
        <div>
          <p> Username </p>
          <div className="profile-buttons">
            <button> Support </button>
            <button> ... </button>
          </div>
        </div>
      </div>

      <div className="info grid">
        <div className="cell"> 203 Brands </div>
        <div className="cell"> Strength </div>
        <div className="cell"> 2k High Fives </div>
        <div className="cell"> Charlotte, NC </div>
      </div>
    </>
  );
}

export default Info;
