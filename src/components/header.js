import React from "react";
import Logo from "../assets/deliveroo.png";

const Header = props => {
  return (
    <div>
      <div className="wrapper navbar">
        <img src={Logo} id="logo" alt="Deliveroo" />
      </div>
      <hr />
      <div className="wrapper title">
        <div>
          <h1>{props.data.restaurant.name}</h1>
          <p>{props.data.restaurant.description}</p>
        </div>
        <img src={props.data.restaurant.picture} alt="restaurant cover" />
      </div>
    </div>
  );
};

export default Header;
