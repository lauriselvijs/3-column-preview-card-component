import React from "react";
import "./App.scss";
import Suv from "./component/Suv";
import Sedan from "./component/Sedan";
import Luxury from "./component/Luxury";
import CardWrapper from "./component/CardWrapper";
import Footer from "./component/Footer";
import MainWrapper from "./component/MainWrapper";

const App = () => {
  return (
    <div className="app">
      <MainWrapper>
        <CardWrapper>
          <Sedan />
          <Suv />
          <Luxury />
        </CardWrapper>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default App;
