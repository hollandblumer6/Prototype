import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../../styles/user/info/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faEllipsis,
  faLocationDot,
  faCircleCheck,
  faDumbbell,
  faArrowUpRightFromSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className="left">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="small"
                color="#5d9345"
              />
              <FontAwesomeIcon icon={faDumbbell} size="small" color="#5d9345" />
            </div>
            <div className="action-buttons">
              <button> Suggest </button>
              <button>
                <FontAwesomeIcon icon={faEllipsis} size="small" />
              </button>
            </div>
          </div>
          <div className="row flex-start">
            <div className="grey">part of </div>
            <div className="username">sovosbrands</div>
          </div>
          <div className="row flex-start">
            <FontAwesomeIcon icon={faLocationDot} size="small" />
            <div className="grey left">Bellevue, CO</div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="row">
          <div className="cell">
            <div className="username">Dairy</div>
            <div className="grey left">Industry</div>
            {/* <FontAwesomeIcon icon={faIndustry} size="small" color="#5d9345" /> */}
          </div>

          <div className="cell">
            {" "}
            <div className="username">Strength</div>{" "}
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
            <div className="username">Weekly</div>
            <div className="grey left">Activity</div>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            {" "}
            <div className="emphasis">6</div>
            <div className="username">Active Projects </div>
            <div className="left">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="small" />
            </div>
          </div>
          <div className="cell">
            {" "}
            <div className="emphasis">100</div>
            <div className="username">Improvements </div>
          </div>
        </div>

        <div className="row">
          <div className="cell brown">
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="xs"
              color="#dddd"
              className="top"
            />{" "}
            <div className="avatar-supporters">
              <div className="avatar-supporter">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png"
                />{" "}
              </div>

              <div className="avatar-supporter">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  style={{ background: "white" }}
                  src="http://women.ncr-iran.org/wp-content/uploads/2019/10/NCRI-Women-Committee-Logo.png"
                />{" "}
              </div>
              <div className="avatar-supporter">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/15094485_10154789646058793_2692844336673094070_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VJ0-mR4QQe0AX98GIUE&_nc_ht=scontent-atl3-1.xx&oh=00_AT9orZWDrLjFB_V1zwX0r9XksJ3j1_bIrU4C74zkAAUAsA&oe=635B460F"
                />{" "}
              </div>
              <div className="avatar-supporter">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://anthropology.uconn.edu/wp-content/uploads/sites/944/2020/07/BLM-Icon.jpg"
                />{" "}
              </div>
              <div className="avatar-supporter">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://www.att.com/ecms/dam/att/consumer/global/logos/att_globe_500x500.jpg"
                />{" "}
              </div>
            </div>
          </div>
          <div className="avatar-supporter">
            <div className="extra-support">
              <FontAwesomeIcon icon={faEllipsis} size="small" color="#f4f4f4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
