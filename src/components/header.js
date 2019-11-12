import React from "react";
import Logo from "../assets/deliveroo.png";
import Cover from "../assets/cover.png";

const Header = () => {
  return (
    <div>
      <div className="wrapper navbar">
        <img src={Logo} id="logo" alt="Deliveroo" />
      </div>
      <hr />
      <div className="wrapper title">
        <div>
          <h1>MY TITLE</h1>
          <p>Description</p>
        </div>
        <img src={Cover} alt="restaurant cover" />
      </div>
    </div>
  );
};

export default Header;
