import Part from "../Components/Part";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const state = [
  {
    srcs: ["./assets/logo_skate.png"],
    style: {
      width: "100%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "What is Free to Earn(F2E)?",
    name: "state1",
  },
  {
    srcs: ["./assets/charactor.png"],
    style: {
      width: "73%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "HOBBIES APP",
    name: "state2",
  },
  {
    srcs: [
      "./assets/phone/phone1.png",
      "./assets/phone/phone2.png",
      "./assets/phone/phone3.png",
    ],
    style: {
      width: "50%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "APP Pages",
    name: "state3",
  },
];

function About2() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="about">
      <Part {...state[0]}>
        HOBBIES is a Web3 lifestyle application. If you turn off your smartphone
        and do your own hobby, you'll get a reward.
        <br />
        <br /> It gives modern people a chance to reduce their dependence on
        smartphones and find a hobby that suits them.
      </Part>
      <Part {...state[1]}>
        After obtaining HOBBIES NFT, you can receive $HOBB tokens by turning off
        the smartphone screen.
        <br />
        <br />
        When you turn off the screen on your smartphone, the character in the
        application starts a hobby that corresponds to NFT.
      </Part>
      <Part {...state[2]}>
        When you click the Start button in the HOBBIES app, the screen turns off
        and accumulates $HOBB as much as the ability of the NFT.
        <br />
        <br />
        The capability value is different for each NFT, and NFT can be sold or
        purchased at its own store in the app.
        <br />
        <br />
        When you press the start button, the screen turns off, and when you turn
        on the lock screen, the current accumulated $HOBB is displayed.
      </Part>
    </div>
  );
}

export default About2;
