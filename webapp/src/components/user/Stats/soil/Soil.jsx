import React from "react";
import Grass from "./Grass";
import Dirt from "./Dirt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Soil() {
  return (
    <div>
      <Grass />
      <Dirt />
    </div>
  );
}

export default Soil;
