import React from "react";
import Card from "./card";

const Category = props => {
  let keys = Object.keys(props);

  const items = keys.map(el =>
    props[el].title ? (
      <Card
        {...props[el]}
        key={props[el].id}
        click={() => {
          props.click(props[el]);
        }}
      />
    ) : null
  );

  return <div className="cards">{items}</div>;
};

export default Category;
