import React from "react";
import Card from "./card";

const Category = props => {
  let keys = Object.keys(props);

  const items = keys.map(el => <Card {...props[el]} key={props[el].id} />);

  return <div className="cards">{items}</div>;
};

export default Category;
