import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ticker from "react-ticker";

const picture = [
  "./assets/Move/1.png",
  "./assets/Move/2.png",
  "./assets/Move/3.png",
  "./assets/Move/4.png",
  "./assets/Move/5.png",
  "./assets/Move/6.png",
];

function Movearound() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="move">
      <h2 className="title" data-aos="fade-up" data-aos-offset="-20">
        HOBBIES NFT
      </h2>
      <Ticker>
        {({ index }) => (
          <div
            style={{
              width: "15rem",
              height: "15rem",
              marginRight: "3rem",
            }}
          >
            <img
              src={picture[index % picture.length]}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            />
          </div>
        )}
      </Ticker>
    </div>
  );
}
export default Movearound;
