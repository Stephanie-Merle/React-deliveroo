import React, { useState } from "react";
import Category from "./category";
import Basket from "./basket";

const Content = props => {
  const [orders, setOrders] = useState([]);
  const obj = props.data.menu;
  const cat = Object.keys(obj);
  const handleOrder = el => {
    const check = [...orders];
    const found = check.find(order => order.id === el.id);
    if (found) {
      found.quantity += 1;
      found.total = (found.quantity * found.price).toFixed(2);
      setOrders(check);
    } else {
      el.quantity = 1;
      el.total = el.price;
      let myOrders = [...orders, el];
      setOrders(myOrders);
    }
  };

  const listing = cat.map(el =>
    obj[el].length > 0 ? (
      <div key={obj[el].id}>
        <h2 key={obj[el].id}>{el}</h2>
        <Category {...obj[el]} key={obj[el].id} click={handleOrder} />
      </div>
    ) : null
  );
  const handleRemove = el => {
    const check = [...orders];
    const found = check.find(order => order.id === el.id);
    if (found.quantity > 1) {
      found.quantity -= 1;
      found.total = (found.quantity * found.price).toFixed(2);
      setOrders(check);
    } else {
      let result = check.filter(order => order.id !== found.id);
      setOrders(result);
    }
  };
  return (
    <>
      <div className="content">
        <div className="wrapper">
          <div className="category">{listing}</div>
          <Basket
            myOrders={{ ...orders }}
            add={handleOrder}
            remove={handleRemove}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
