import React from "react";
import Card from "./card";

const Category = () => {
  return (
    <>
      <div className="wrapper">
        <div className="category">
          <h2>CATEGORIES</h2>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
