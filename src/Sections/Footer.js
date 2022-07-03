import React from "react";
import Social from "../Components/Social";

function Footer() {
  return (
    <div className="footer">
      <img src="./assets/Logos/ecell-white.png" alt="E-cell VIT" />
      <span className="iia">HOBBY TO EARN</span>
      <a href="mailto:hobbiesnft@gmail.com">hobbiesnft@gmail.com</a>
      <a href="tel:+0212345678">+02-1234-5678</a>
      <Social position="bottom" />
    </div>
  );
}

export default Footer;
