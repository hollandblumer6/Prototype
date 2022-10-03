import React from "react";
import "../../../../styles/user/stats/dirt/dirt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";

function Dirt() {
  return (
    <div className="dirt-container">
      <div className="dirt">
        <Avatar src="https://images.squarespace-cdn.com/content/v1/5c38acbda9e0282931d6ccab/1560123365745-C5BUXRHESUWEHOBCVLFU/IMG_0296.jpg?format=1000w" />
        <Avatar src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/244072570_230647072416569_6599731192449426236_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mnHDEIe4KpIAX_7TbTQ&tn=TlJACaxRd36y6fbn&_nc_ht=scontent-atl3-1.xx&oh=00_AT-7czBU_kbhhBCfRQaGiYgnuw7k6wVeMzMxm5XIiBW8CQ&oe=633CED2A" />
        <Avatar src="https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/4862569.cisco-brewers-logo.jpg" />
        <Avatar src="https://cdn.knoji.com/images/logo/welcometowondervalleycom.jpg?aspect=center&snap=false&width=500&height=250" />
        <Avatar src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/305625115_495959239201957_4238320734677223598_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NmpPVDt6sLIAX_fgjmM&_nc_ht=scontent-atl3-1.xx&oh=00_AT_BqaIJmdm4PrRIOhfNiYIFRncjBO08UoXRfrCJhmpydQ&oe=633BC9FA" />
        <Avatar src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/37891637_1927115090922616_3524589092404723712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PaAv5bxA21IAX9cNKZW&_nc_ht=scontent-atl3-1.xx&oh=00_AT8e-EmzRcmDPHBdf9ldzBGXB9BvULNRC0X2YIQWM6RVHw&oe=635E8670" />
      </div>
      <div className="more-dirt">
        <FontAwesomeIcon icon={faEllipsis} color="white" />
      </div>
    </div>
  );
}

export default Dirt;
