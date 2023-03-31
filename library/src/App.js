import React from "react";
import CustomCard from "./Pages/CustomCard";
import img from './Pages/CustomCard/paella-398968__480.jpg'


function App() {
  return (
    <div className="App">
      <CustomCard
      headerTitle = "Shrimp and Chorizo Paella"
      img = {img}
      contentCard = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      link="https://vi.wikipedia.org/wiki/Paella"
      nameButton="View"
      />
    </div>
  );
}

export default App;
