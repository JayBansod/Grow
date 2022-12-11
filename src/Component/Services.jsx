import React from "react";
import ImgMediaCard from "./ImgMediaCard";
import ImgMap from "./ImgMap";
import "../Css/ImgMEdiaComp.css";
const Services = () => {
  return (
    <>
      <div className="maindiv">
        {ImgMap.map((val, inx) => {
          return (
            <ImgMediaCard
              key={inx}
              src={val.img_}
              name={val.name}
              p={val.p}
              navlink={val.navlink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
