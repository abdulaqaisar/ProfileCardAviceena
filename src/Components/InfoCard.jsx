import React from "react";
import "./InfoCard.css";
import image from "../assets/analyst.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const InfoCard = () => {
  return (
    <>
      <div className="infocard">
        <div className="profileimage">
          <img src={image} alt="" />
        </div>
        <div className="data">
          <h2>James Johnson</h2>
          <p>Financial Analyst</p>
          <p style={{ marginTop: "5px" }}>Personal Description</p>
        </div>
        <div className="buttons">
          <div className="phone">
            <FaPhone style={{ marginTop: "11px" , color:"#0C6A76"  }} />
            <button>Phone</button>
          </div>
          <div className="email">
            <MdEmail style={{ marginTop: "11px" , color:"#0C6A76"  }} />
            <button>Email</button>
          </div>
          <div className="website">
            <TbWorld style={{ marginTop: "11px" , color:"#0C6A76" }} />
            <button>Website</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
