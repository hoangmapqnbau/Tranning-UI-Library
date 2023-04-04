import React, { useState } from "react";
import "./DropDownList.css";

const DropDownList = (props) => {
  const [choice, setChoice] = useState();

  const changeChoiceHandler = (e) => {
    setChoice(e.target.value);
  };

  return (
    <>
      {props.type === "list" && (
        <div className="wrapper">
          <select
            value={choice}
            onChange={changeChoiceHandler}
            style={{ background: props.themeColor }}
          >
            {props.dataDropdownList &&
              props.dataDropdownList.map((dropdownList, index) => (
                <option key={index} value={dropdownList.value}>
                  {dropdownList.label}
                </option>
              ))}
          </select>

          <p>{choice}</p>
        </div>
      )}
      {props.type === "autocomplete" && (
        <div className="wrapper">
        <p>Type the name of a European country:</p>
        <input placeholder="eg. Denmark" />
      </div>
      )}
    </>
  );
};

export default DropDownList;
