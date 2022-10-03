import React from "react";
import "../../styles/header/Header.css";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
Amplify.configure(awsconfig);

function Header() {
  return (
    <>
      <div className="banner">
        <p>
          Virtual Conference on 10/1 <u> Learn More </u>
        </p>
      </div>
      <div className="header">
        <div className="container">
          <Search />
          <div class="logo">DIVOT</div>
          <Dropdown />
          <AmplifySignOut />
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(Header);
