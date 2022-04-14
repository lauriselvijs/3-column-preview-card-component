import React from "react";
import "./App.scss";
import Suv from "./component/Suv";
import Sedan from "./component/Sedan";
import Luxury from "./component/Luxury";
import Footer from "./component/Footer";
import MainWrapper from "./component/MainWrapper";
import LearnMoreClickedWrapper from "./component/LearnMoreClickedWrapper";

const App = () => {
  return (
    <div className="app">
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
