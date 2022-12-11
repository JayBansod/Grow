import * as React from "react";
import { NavLink } from "react-router-dom";
export default function ImgMediaCard(prop) {
  return (
    <>
      <div className="cards" id="ss">
        <div className="divsub">
          <img src={prop.src} alt="" className="seriesImage" />
          <div>
            <h4 className="seriesName">{prop.name}</h4>
            <p>{prop.p}</p>
            <NavLink to="" className="atag">
              <button className="btn">See More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
