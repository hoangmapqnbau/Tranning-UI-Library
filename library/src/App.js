import React from "react";
import CustomCard from "./Pages/CustomCard";
import img from "./Pages/CustomCard/paella-398968__480.jpg";
import DropDownList from "./Pages/DropDownList/DropDownList";

function App() {
  const dataCard = [
    {
      id: "0",
      headerTitle: "Test data",
      contentCard:
        "Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content ",
      imageCard: img,
      actions: [
        {
          path: "https://google.com",
          action: () => alert("Waiting for Google"),
          text: "Text of action card ",
        },
      ],
    },
    {
      id: "1",
      headerTitle: "Test data",
      contentCard:
        "Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content ",
      imageCard: img,
      actions: [
        {
          path: "https://google.com",
          action: () => console.log(123), 
          text: "Text of action card ",
        },
      ],
    },
    {
      id: "2",
      headerTitle: "Test data",
      contentCard:
        "Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content Test content ",
      imageCard: img,
      actions: [
        {
          path: "https://google.com",
          action: () => alert(123),
          text: "Text of action card ",
        },
      ],
    },
  ];



  const dataDropdownList = [
    {
      id: "0",
      label: "Chair",
      value: "Chair",
    },
    {
      id: "1",
      label: "Table",
      value: "Table",
    },
    {
      id: "2",
      label: "Desk",
      value: "Desk",
    },
    {
      id: "3",
      label: "Mouse",
      value: "Mouse",
    },
    {
      id: "4",
      label: "Keyboard",
      value: "Keyboard",
    },
  ];
  return (
    <div className="App">
      {/* <CustomCard dataCard={dataCard} /> */}

      <DropDownList dataDropdownList={dataDropdownList} title="Your choice is:" label="Please select your choice..."/>
    </div>
  );
}

export default App;
