import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import axios from "axios";
import Spinner from "./components/spinner";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const fetchingData = async () => {
    const myData = await axios.get("https://deliveroo-api.now.sh/menu");
    setData(myData);
    setLoading(false);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  const handleOrder = el => {
    setOrder([...order, el]);
    console.log(order);
  };
  return (
    <>
      {loading ? <Spinner /> : <Header {...data} />}
      {loading ? <Spinner /> : <Content {...data} action={handleOrder} />}
    </>
  );
};

export default App;
