import React from "react";
import Rocket from "../image/bac.png";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        forH1={"Grow Your business with"}
        imag={Rocket}
        visit={"./about"}
        butname={"Get Started"}
      />
    </>
  );
};

export default Home;
