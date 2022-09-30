import React from "react";
import Highlights from "./Highlights";
import Suggestions from "./Suggestions";
import "../../../styles/user/stats/stats/stats.css";

function Stats() {
  return (
    <div className="stats">
      <nav class="slidemenu">
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          class="slide-toggle"
          checked
        />
        <label for="slide-item-1">
          <span>Suggestions</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          class="slide-toggle"
        />
        <label for="slide-item-2">
          <span>Impact</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          class="slide-toggle"
        />
        <label for="slide-item-3">
          <span>Projects</span>
        </label>

        <div class="clear"></div>

        <div class="slider">
          <div class="bar"></div>
        </div>
      </nav>

      <Suggestions />
    </div>
  );
}

export default Stats;
