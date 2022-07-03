import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Image(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={props.name} data-aos="zoom-out-up" data-aos-offset="-20">
      <img src={props.img} alt={props.name} width={500} />
    </div>
  );
}

export default Image;
