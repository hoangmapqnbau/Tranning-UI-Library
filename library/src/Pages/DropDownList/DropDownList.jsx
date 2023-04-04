import React, { useState } from "react";
import"./DropDownList.css";

const DropDownList = (props) => {

  const [choice, setChoice] = useState();

  const changeChoiceHandler = (e) =>{
    setChoice(e.target.value);
  };

  return (
    <div className="wrapper">
      <label>
        {props.label}
        <select value={choice} onChange={changeChoiceHandler}>
          {props.dataDropdownList && props.dataDropdownList.map((dropdownList, index) => 
            <option key={index} value={dropdownList.value}>{dropdownList.label}</option>
          )}
        </select>
      </label>
      <p>{props.title} {choice}</p>
    </div>
  );
};

export default DropDownList;
