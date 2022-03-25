import React from "react";
import sparklinGrilledCheese from "../assets/sparklinGrilledCheese.gif";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <br />
        <h2>Welcome to Grilled Cheese Channel!</h2>
        <h3>Take a look around and prepare to make the best grilled cheese!</h3>
        <br />
        <img src={sparklinGrilledCheese} width="500" alt="" />
      </div>
    </>
  );
};

export default Home;
