import React from "react";
import Category from "./category";
import Basket from "./basket";

const Content = props => {
  const obj = props.data.menu;
  const cat = Object.keys(obj);
  console.log(cat);
  cat.map(el => console.log(el));
  const listing = cat.map(el =>
    obj[el].length > 0 ? (
      <>
        <h2>{el}</h2>
        <Category {...obj[el]} key={el} />
      </>
    ) : null
  );

  return (
    <div className="content">
      <div className="wrapper">
        <div className="category">{listing}</div>
      </div>
      <Basket />
    </div>
  );
};

export default Content;
