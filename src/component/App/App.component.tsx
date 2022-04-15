import React from "react";
import "./App.style.scss";
import Suv from "../Suv";
import Sedan from "../Sedan";
import Luxury from "../Luxury";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import LearnMoreClickedWrapper from "../LearnMoreClickedWrapper";
import DarkModeBtn from "../DarkModeBtn";

const App = () => {
  return (
    <div className="app">
      <DarkModeBtn />

      <MainWrapper>
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Sedan
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Suv
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
        <LearnMoreClickedWrapper
          render={(learnMoreClicked, onLearnMoreBtnClick) => (
            <Luxury
              learnMoreClicked={learnMoreClicked}
              onLearnMoreBtnClick={onLearnMoreBtnClick}
            />
          )}
        />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default App;
