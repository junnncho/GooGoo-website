import React, { useState } from "react";
import Nav from "../Components/Nav";
import Social from "../Components/Social";
import img1 from "../img/transparent/1.png";
import img2 from "../img/transparent/2.png";
import img3 from "../img/transparent/3.png";
import img4 from "../img/transparent/4.png";
import img5 from "../img/transparent/6.png";
import { Link } from "react-router-dom";
const backgroundArr = [img1, img2, img3, img4, img5];
function Landing() {
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];
  return (
    <div id="home">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="landing-data">
        <Nav />
        <Social position="top" />
        <div className="col-12">
          <img src={backgroundImg} className="land-img" />
          <div className="land">
            <span className="head">FREE TO EARN</span>
            <span className="vit">NFT 프로젝트</span>
          </div>
        </div>
        <Link to="/eng" className="scrolldown">
          ENGLISH <i className="fa fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
