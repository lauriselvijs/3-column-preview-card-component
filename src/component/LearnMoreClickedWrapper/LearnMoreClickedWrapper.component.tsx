import React, { useState } from "react";
import "./LearnMoreClickedWrapper.style.scss";
import { ILearnMoreClickedWrapper } from "../../type-definition/LearnMore";

const LearnMoreClickedWrapper = ({ render }: ILearnMoreClickedWrapper) => {
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false);

  const onLearnMoreBtnClick = (): void =>
    setLearnMoreClicked(!learnMoreClicked);

  return (
    <div className="learn-more-clicked-wrapper">
      {render(learnMoreClicked, onLearnMoreBtnClick)}
    </div>
  );
};

export default LearnMoreClickedWrapper;
