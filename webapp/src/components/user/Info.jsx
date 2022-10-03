import React from "react";
import "../../styles/user/profile.css";
import "../../styles/user/info/info.css";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faEllipsis,
  faLocationDot,
  faCircleCheck,
  faTree,
  faArrowUpRightFromSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function Info({ user }) {
  return (
    <div className="info">
      <div className="profile">
        <Avatar
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/53767737_2574304719310660_7428725522793758720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=y9lZk4B0LOEAX_L4n_I&_nc_ht=scontent-atl3-1.xx&oh=00_AT80zWmUYcgGnhB1MCGN0kkcg4_XctQTWiqqYxD9P_qCNA&oe=6357F885"
          sx={{ height: "82px", width: "82px" }}
          style={{
            border: "0.1px solid #eeeeee",
          }}
        />{" "}
        <div className="profile-info">
          <div className="row flex-start">
            <div className="username"> {user} </div>
            <div className="left">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="small"
                color="#5d9345"
              />
              <FontAwesomeIcon icon={faTree} size="small" color="#5d9345" />
            </div>
            <div className="action-buttons">
              <button> Support </button>
              <button>
                <FontAwesomeIcon icon={faEllipsis} size="small" />
              </button>
            </div>
          </div>
          <div className="row flex-start">
            <div className="username">#</div>{" "}
            <div className="grey">founder</div>
            <div className="username">#</div>{" "}
            <div className="grey">supporter</div>
          </div>
          <div className="row flex-start">
            <FontAwesomeIcon icon={faLocationDot} size="small" />
            <div className="grey left">Hanover, NH</div>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="row">
          <div className="cell">
            {" "}
            <div className="username">203</div>{" "}
            <div className="grey left">Brands</div>{" "}
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
            </div>{" "}
          </div>
          <div className="cell">
            {" "}
            <div className="username">2k</div>{" "}
            <div className="grey left">High Fives</div>{" "}
          </div>
        </div>
        <div className="row">
          <div className="cell">
            {" "}
            <div className="username">Daily</div>
            <div className="grey left">Activity</div>
          </div>
          <div className="follower-cell">
            <div className="avatar-followers">
              <div className="avatar-follower">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/10394802_453780744757584_1431331994541198245_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=n58dfvgO038AX-f3EoQ&_nc_ht=scontent-atl3-1.xx&oh=00_AT_kz2a94gUutFmE2opvgpmavj8u8sNAAvIBlxHRaLKL-g&oe=635CCE07"
                />{" "}
              </div>
              <div className="avatar-follower">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/28577163_10215924417131865_4336647335157699807_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YXYxK3FBM9wAX-t6_VY&_nc_ht=scontent-atl3-1.xx&oh=00_AT9G06mFApLrx-EOSHJnvf8ydeHLUgBfkfOe5i9QlQ-2TQ&oe=635A4D61"
                />{" "}
              </div>
              <div className="avatar-follower">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/14258124_661465617352013_2700562365845836857_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=36aJmwf3NY8AX9Lp5We&tn=TlJACaxRd36y6fbn&_nc_ht=scontent-atl3-1.xx&oh=00_AT9OJF1LLZ3PIIO_a2VN_FJg3Al_Xe7t4q5eMf-4JPPd-g&oe=635AB928"
                />{" "}
              </div>
              <div className="avatar-follower">
                {" "}
                <Avatar
                  className="supporter"
                  sx={{ height: "32px", width: "32px" }}
                  src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/87382187_2540269782751719_513581456132407296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JDohv7PpN20AX-lMPEt&_nc_ht=scontent-atl3-1.xx&oh=00_AT-hPGEeS4USCIVifl-UchcZsTrYHZAHBuD01fV7S_JaEw&oe=635CE444"
                />{" "}
              </div>
              <div className="avatar-follower">
                <div className="extra-followers">
                  <div>12k+</div>
                </div>
              </div>
            </div>
            <div className="grey"> Supporters </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
