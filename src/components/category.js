import React from "react";
import Card from "./card";
import { Action } from "rxjs/internal/scheduler/Action";

const Category = props => {
  let keys = Object.keys(props);

  const items = keys.map(el => (
    <Card {...props[el]} key={props[el].id} onClick={() => Action(el)} />
  ));

  return <div className="cards">{items}</div>;
};

export default Category;
