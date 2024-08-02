import React from "react";
import "./Card.css";
import InfoCard from "./InfoCard";
import Details from "./Details";
import Social_Icons from "./Social_Icons";
import glass from '../assets/glass.png'
const Card = () => {
  return (
    <>
      <div className="card">
        <InfoCard />
        <Details/>
        <Social_Icons/>
        <br />
      </div>
    </>
  );
};

export default Card;
