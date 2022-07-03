import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Events from "../Components/Events";

function Activities() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <span id="activities">
      <div className="bg-activities">
        <h2 className="title" data-aos="fade-up" data-aos-offset="-20">
          Roadmap
        </h2>
        <p className="subhead" data-aos="fade-up" data-aos-offset="-20">
          우리의 목표
        </p>
      </div>
      <Events />
    </span>
  );
}

export default Activities;
