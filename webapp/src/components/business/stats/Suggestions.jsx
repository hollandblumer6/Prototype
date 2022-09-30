import React from "react";
import "../../../styles/business/stats/suggestions/suggestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBoxOpen,
  faCubesStacked,
  faCirclePlus,
  faShareNodes,
  faTruckFront,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions-container">
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faBoxOpen}
              size="lg"
              className="pause-btn"
              color="#ffffff"
            />
          </div>
          <div className="content"> Sustainable Packaging </div>
        </div>
        <div className="content black">
          {" "}
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
          <div className="content"> Supporters </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
        </div>
      </div>

      <div className="suggestions">
        {" "}
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faLeaf}
              size="lg"
              className="pause-btn"
              color="#ffffff"
            />
          </div>
          <div className="content"> Join Platform </div>
        </div>
        <div className="content black">
          {" "}
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
          <div className="content left"> Supporters </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faCubesStacked}
              size="lg"
              className="pause-btn"
              color="#ffffff"
            />
          </div>

          <div className="content">Less sugar </div>
        </div>

        <div className="content black">
          {" "}
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
          <div className="left"> Supporters </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestion-circle">
          <div className="avatar-circle">
            <FontAwesomeIcon
              icon={faTruckFront}
              size="lg"
              className="pause-btn"
              color="#ffffff"
            />
          </div>

          <div className="content">Source Locally </div>
        </div>

        <div className="content black">
          {" "}
          <div className="avatar-followers">
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              {" "}
              <Avatar
                className="supporter"
                sx={{ height: "32px", width: "32px" }}
              />{" "}
            </div>
            <div className="avatar-follower">
              <div className="extra-followers">
                <div>12k+</div>
              </div>
            </div>
          </div>
          <div className="content left"> Supporters </div>
        </div>
        <div className="support-share">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="2x"
            className="pause-btn"
            color="#8e8e8e"
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            size="xl"
            className="pause-btn"
            color="#8e8e8e"
          />
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
