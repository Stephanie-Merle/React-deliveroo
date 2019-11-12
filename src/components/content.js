import React from "react";
import Category from "./category";

const Content = props => {
  const obj = props.data.menu;
  const cat = Object.keys(obj);
  console.log(obj[cat]);
  const listing = cat.map(el => <Category {...obj[el]} key={obj[el].id} />);

  return <div className="content">{listing}</div>;
};

export default Content;
