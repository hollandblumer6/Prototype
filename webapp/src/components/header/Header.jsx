import React from "react";
import "../../styles/header/Header.css";
import Search from "./Search";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <>
      <div className="banner">
        <p>
          VIRTUAL CONFERENCE ON 10/1 <u> LEARN MORE </u>
        </p>
      </div>
      <div className="header">
        <div className="container">
          <Search />
          <div class="logo">DIVOT</div>
          <Dropdown />
        </div>
      </div>
    </>
  );
}

export default Header;
