import React from "react";
import Rocket from "../image/1.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        forH1={"Welcome to about Page"}
        imag={Rocket}
        visit={"./contact"}
        butname={"Contact Us"}
      />
    </>
  );
};

export default About;
