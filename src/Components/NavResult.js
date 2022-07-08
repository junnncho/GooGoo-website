import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={`result-topnav`}>
      <Link to="/">
        <img src="./assets/Logos/ecell-white.png" alt="HOBBIES" height="45" />
      </Link>
    </div>
  );
}

export default Nav;
