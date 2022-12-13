import React, { useState } from "react";
import "../Css/Contact.css";
import aboutImg from "../image/about.png";
import Button from "@mui/material/Button";
const Contact = () => {
  const [info, setinfo] = useState({
    name: "",
    email: "",
    mobile: "",
    massage: "",
  });
  const changeEvent = (event) => {
    const { name, value } = event.target;
    setinfo((preval) => {
      // console.log(info.name);
      return { ...preval, [name]: value };
    });
  };
  const submitted = () => {
    alert(
      "Name " +
        info.name +
        "\nEmail " +
        info.email +
        "\nMobile:-" +
        info.mobile +
        "\nMessage:-" +
        info.massage
    );
    setinfo({
      name: "",
      email: "",
      mobile: "",
      massage: "",
    });
  };
  return (
    <>
      <div className="main">
        <div className="main_card">
          <div className="inputs_div">
            <input
              onChange={changeEvent}
              className="input"
              type="text"
              name="name"
              value={info.name}
              placeholder="Enter your Name"
              autoComplete="off"
            />
            <input
              onChange={changeEvent}
              className="input"
              type="text"
              name="email"
              value={info.email}
              placeholder="Enter your Email"
              autoComplete="off"
            />
            <input
              onChange={changeEvent}
              className="input"
              type="text"
              name="mobile"
              value={info.mobile}
              placeholder="Enter your Mobile Number"
              autoComplete="off"
            />
            <input
              onChange={changeEvent}
              className="input"
              name="massage"
              value={info.massage}
              type="text"
              placeholder="Type Here"
            />
            <div>
              <Button variant="contained" id="homebtn" onClick={submitted}>
                Submit
              </Button>
            </div>
          </div>
          <div className="image">
            <img src={aboutImg} alt="About_Image" id="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
