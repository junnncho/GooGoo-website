import React, { useEffect } from "react";
import DarkBg from "../Components/DarkBg";
import AOS from "aos";
import "aos/dist/aos.css";

function Board(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
      <div className="bmember">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={props.pic} alt={props.name} />
            </div>
            <div className="flip-box-back">
              <a href={props.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <h2 className="name">{props.name}</h2>
        <h3 className="desig">{props.designation}</h3>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div id="team">
      <DarkBg head="Team" />
      <div className="team">
        <Board
          name="Jun Cho"
          designation="Web Engineer"
          pic="./assets/Profile/4.jpeg"
          cls="two"
          linkedin="https://www.linkedin.com/in/namrata-singhal-ba8735199/"
        />
        <Board
          name="JH Kim"
          designation="Deputy Managing Director"
          pic="./assets/Profile/2.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/nipun-mahajan-6b6718165/"
        />
        <Board
          name="Steven Lee"
          designation="Deputy Managing Director"
          pic="./assets/Profile/3.jfif"
          cls="three"
          linkedin="https://www.linkedin.com/in/pearl-motwani-862089190/"
        />
        <Board
          name="G-Dragon"
          designation="Director of Operations"
          pic="./assets/Profile/1.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/rishabh-mehta1605/"
        />
        <Board
          name="Sandara Cho"
          designation="Director of Operations"
          pic="./assets/Profile/5.jfif"
          cls="three"
          linkedin="https://www.linkedin.com/in/rishabh-mehta1605/"
        />
      </div>
    </div>
  );
}

export default Team;
