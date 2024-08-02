import React from "react";
import "./Details.css";
import { FaBriefcase } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Details = () => {
  return (
    <>
      <div className="details">
        <div className="profession">
          <FaBriefcase style={{ fontSize: "x-large", color: "#0C6A76" }} />
          <div className="pdata">
            <p>Analyst</p>
            <h4>Finance Corp.</h4>
          </div>
        </div>
        <div className="profession">
          <div className="ic"><TfiWorld style={{ fontSize: "x-large", color: "#0C6A76" }} /></div>
          <div className="pdata">
            <p>Website</p>
            <h4>http://www.Financecorp.com</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
