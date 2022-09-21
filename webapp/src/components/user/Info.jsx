import React from "react";
import "../../styles/user/profile.css";

function Info() {
  return (
    <>
      <div>
        <div>{/* avatar here */}</div>
        <div>
          <p> Username </p>
          <div className="profile-buttons">
            <button> Support </button>
            <button> ... </button>
          </div>
        </div>
      </div>

      <div className="info"></div>
    </>
  );
}

export default Info;
