import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header/Header.css";

function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} size="md" color="#262626" />
      {/* <form>
        {" "}
        <input type="text" placeholder="Search"></input>
      </form> */}
    </div>
  );
}

export default Search;
