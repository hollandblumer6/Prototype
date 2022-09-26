import React from "react";
import Avatar from "@mui/material/Avatar";

function Info() {
  return (
    <div>
      {" "}
      <div className="info">
        <div className="profile">
          <Avatar
            sx={{ height: "82px", width: "82px" }}
            style={{
              border: "1px solid #f6f6f6",
            }}
            src="https://mma.prnewswire.com/media/1831942/noosa_Branding_Update_Logos_Horizontal_Lettering_Logo.jpg?p=publish"
          />{" "}
          <div>
            <p> @noosa </p>
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
    </div>
  );
}

export default Info;
