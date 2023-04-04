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
      width: 600,
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
  const countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];
  return (
    <> 
    {/* <CustomCard dataCard={dataCard} /> */}
    <div className="App">
      <DropDownList type="autocomplete" dataDropdownList={dataDropdownList} themeColor="yellow" dataAutoComplete={countries}/>
    </div>
    </>
  );
}

export default App;
