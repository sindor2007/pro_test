import React from "react";
import "./car.css";
function Car({ image, title }) {
  return(
    <div className="card">
    <img src={image} alt="" />
    <h1>{title}</h1>
  </div>
  );
  
}
export default Car