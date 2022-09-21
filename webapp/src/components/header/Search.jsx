import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        className="pause-btn"
      />
    </div>
  );
}

export default Search;
