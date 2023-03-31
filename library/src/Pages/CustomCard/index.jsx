import React from "react";
import "./index.css";
//import { Link } from "react-router-dom";
//import Button from "./Button";

const CustomCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="header-card">
        <h2 className="title-card">{props.headerTitle}</h2>
      </div>
      <div className="body-card">
        <img src={props.img} alt="Paella" />
        <p className="content-card">{props.contentCard}</p>
      </div>
      <div className="footer-card">
        <button
          className="card-button"
          type="button"
          onClick= {()=>{
            window.location.href = props.link
          }}
        >
          {props.nameButton}
        </button>
      </div>
    </div>
  );
};
export default CustomCard;
