import React from "react";
import LessCircle from "./lessCircle";
import PlusCircle from "./plusCircle";

const Basket = props => {
  let myOrders = props.myOrders;
  const n = Object.keys(myOrders);
  const listing = n.map(el => (
    <div key={myOrders[el].id} className="orders">
      <div onClick={() => props.remove(myOrders[el])}>
        <LessCircle />
      </div>
      {myOrders[el].quantity}{" "}
      <div onClick={() => props.add(myOrders[el])}>
        <PlusCircle />
      </div>
      {myOrders[el].title}
      <span>{myOrders[el].total} €</span>
    </div>
  ));
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      {listing}
    </div>
  );
};
export default Basket;
