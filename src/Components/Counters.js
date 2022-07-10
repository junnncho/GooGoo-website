import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Counter(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="counters"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-offset="-20"
    >
      <div className="count">{props.count}</div>
      <div className="spec">{props.spec}</div>
    </div>
  );
}

function Counters() {
  return (
    <div className="d-flex2">
      <Counter count="" spec="" />
      <Counter count="" spec="" />
      <Counter count="" spec="" />
      <Counter count="" spec="" />
    </div>
  );
}

export default Counters;
