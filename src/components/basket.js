import React from "react";
import LessCircle from "./lessCircle";
import PlusCircle from "./plusCircle";

const Basket = props => {
  let myOrders = props.myOrders;
  const n = Object.keys(myOrders);

  let subTotal = 0;
  n.map(el => (subTotal += Number(myOrders[el].total)));
  console.log(subTotal);

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
    <div className={subTotal === 0 ? "basket" : "basket green"}>
      <button>Valider mon panier</button>
      {listing}
      {subTotal === 0 ? null : (
        <>
          <hr />
          <div>
            Sous-total: <span>{subTotal}</span>
          </div>
          <div>
            Livraison: <span>3.5</span>
          </div>
          <hr />
          <div>
            Total: <span>{subTotal + Number(3.5)}</span>
          </div>
        </>
      )}
    </div>
  );
};
export default Basket;
