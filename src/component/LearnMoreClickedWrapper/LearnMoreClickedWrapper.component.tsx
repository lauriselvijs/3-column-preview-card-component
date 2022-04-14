import React, { ReactNode, useState } from "react";
import "./LearnMoreClickedWrapper.style.scss";

const LearnMoreClickedWrapper = ({
  render,
}: {
  render: (
    learnMoreClicked: boolean,
    setLearnMoreClicked: () => void
  ) => ReactNode;
}) => {
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false);

  const onLearnMoreBtnClick = (): void => {
    setLearnMoreClicked(!learnMoreClicked);
  };

  return (
    <div className="learn-more-clicked-wrapper">
      {render(learnMoreClicked, onLearnMoreBtnClick)}
    </div>
  );
};

export default LearnMoreClickedWrapper;
