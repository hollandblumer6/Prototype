import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../../styles/user/info/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="info">
      <div className="profile">
        <Avatar
          sx={{ height: "82px", width: "82px" }}
          style={{
            border: "1px solid #eeeeee",
          }}
          src="https://mma.prnewswire.com/media/1831942/noosa_Branding_Update_Logos_Horizontal_Lettering_Logo.jpg?p=publish"
        />

        <div className="profile-info">
          <div className="row flex-start">
            <div className="username"> noosa </div>
            <div className="action-buttons">
              <button> Support </button>
              <button>
                <FontAwesomeIcon icon={faEllipsis} size="small" />
              </button>
            </div>
          </div>
          <div className="row flex-start">
            <div className="grey">part of </div>
            <div className="bold">sovosbrands</div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="row">
          <div className="cell">
            <FontAwesomeIcon icon={faIndustry} size="small" /> Dairy{" "}
          </div>

          <div className="cell">
            {" "}
            Strength{" "}
            <div className="strength">
              {" "}
              <div className="light green"> </div>
              <div className="light green"> </div>
              <div className="light green"> </div>
              <div className="light green"> </div>
              <div className="light white"> </div>
            </div>
          </div>
          <div className="cell">
            {" "}
            Activity <b>Weekly</b>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            {" "}
            <b>6</b>Active Projects{" "}
          </div>
          <div className="cell">
            {" "}
            Supports <b>2K+</b> brands{" "}
          </div>
        </div>

        <div className="row">
          <div className="cell"> Supporters </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
