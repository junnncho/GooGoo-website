import React from "react";
import About from "../Sections/About";
import Landing from "../Sections/Landing";
import Footer from "../Sections/Footer";
import Team from "../Sections/Team";
import RoadMap from "../Sections/RoadMap";
import Movearound from "../Sections/Movearound";
import Counters from "../Components/Counters";
import RoadMap2 from "../Sections2/RoadMap";
import About2 from "../Sections2/About";
import Landing2 from "../Sections2/Landing";
export function Main() {
  return (
    <>
      <Landing />
      <Movearound />
      <Counters />
      <About />
      <RoadMap />
      {/* <Team /> */}
      <Footer />
    </>
  );
}
export function Main2() {
  return (
    <>
      <Landing2 />
      <Movearound />
      <Counters />
      <About2 />
      <RoadMap2 />
      {/* <Team /> */}
      <Footer />
    </>
  );
}
