import React, { useState } from "react";
import Nav from "../Components/Nav";
import Social from "../Components/Social";
import { Link } from "react-scroll";

function Landing() {
  const [head, setHead] = useState("Hobby To Earn");
  window.addEventListener("resize", () => {
    var txt = "E-Cell";
    if (window.innerWidth > 400) {
      txt = "Hobby To Earn";
    }
    setHead(txt);
  });
  window.addEventListener("load", () => {
    var txt = "E-Cell";
    if (window.innerWidth > 400) {
      txt = "Hobby To Earn";
    }
    setHead(txt);
  });

  return (
    <div id="home">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="landing-data">
        <Nav />
        <Social position="top" />
        <div className="col-12">
          <span className="head">{head}</span>
          <span className="vit">NFT Project</span>
          <img
            src={require("../img/sample.png")}
            alt=""
            className="about-img"
          />
          {/*<span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
          <span className="down">
            <a
              href="https://esummit.ecellvit.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="redirectbtn">
                E-Summit <i class="fas fa-external-link-alt"></i>
              </button>
            </a>
          </span>
        */}
        </div>
        <Link
          className="scrolldown"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          Scroll Down <i className="fa fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Landing;