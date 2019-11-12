import React from "react";
import Image from "../assets/cover.png";

const Card = () => {
  return (
    <div className="card">
      <div>
        <p>title</p>
        <p>description</p>
        <p>25E</p>
      </div>
      <img src={Image} alt="item preview" />
    </div>
  );
};

export default Card;
