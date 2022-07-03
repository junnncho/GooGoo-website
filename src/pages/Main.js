import React from "react";
// import Loader from '../Components/Loader';
import About from "../Sections/About";
import Landing from "../Sections/Landing";
import Footer from "../Sections/Footer";
import Gallery from "../Sections/Gallery";
import Team from "../Sections/Team";
import Activities from "../Sections/Activities";
import Movearound from "../Sections/Movearound";
import Counters from "../Components/Counters";

function Main() {
  return (
    <>
      {/* <Loader timeout="1000" /> */}
      <Landing />
      <Movearound />
      <Counters />
      <About />
      <Activities />
      <Team />
      {/*<Gallery />*/}
      <Footer />
    </>
  );
}

export default Main;
