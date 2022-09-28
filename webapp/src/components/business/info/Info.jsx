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

        <div className="info-container">
          <div className="row">
            <div className="cell"> Industry </div>

            <div className="cell"> Strength </div>
            <div className="cell"> Location </div>
          </div>
          <div className="row">
            <div className="cell"> Active Projects </div>
            <div className="cell"> Highlights </div>
          </div>
          <div className="row">
            <div className="cell"> Supports Other companies </div>
          </div>
          <div className="row">
            <div className="cell"> Supporters </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
