import React from "react";
import Social from "../Components/Social";

function Footer() {
  return (
    <div className="footer">
      <img src="./logo.png" alt="HOBBIES" className="logo" />
      <span className="iia">FREE TO EARN</span>
      <a href="mailto:thinkfi.project@gmail.com">thinkfi.project@gmail.com</a>
      <Social position="bottom" />
    </div>
  );
}

export default Footer;
