import React from "react";
import Card from "./card";

const Category = props => {
  let keys = Object.keys(props);

  const items = keys.map(el => <Card {...props[el]} />);

  return (
    <>
      <div className="wrapper">
        <div className="category">
          <h2>{props.key}</h2>
          <div className="cards">{items}</div>
        </div>
      </div>
    </>
  );
};

export default Category;
