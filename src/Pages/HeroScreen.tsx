import { useState } from "react";
// import CardScreen from "../Pages/CardScreen";
// import HeroPage from "../Pages/HeroPage";
// import Layer from "../Pages/Layer";
import Portfolio from "../Pages/Portfolio";
import EditorsChoice from "../Pages/EditorsChoice"; 

const HomeScreen = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      {/* <Layer /> */}
      {/* <CardScreen /> */}
      <Portfolio />
      <EditorsChoice />
    </div>
  );
};

export default HomeScreen;
