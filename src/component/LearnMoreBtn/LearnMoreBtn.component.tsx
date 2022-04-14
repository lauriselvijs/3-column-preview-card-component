import React from "react";
import "./LearnMoreBtn.style.scss";
import PropTypes from "prop-types";
import { ILearnMoreBtn } from "../../type-definition/LearnMore";

const LearnMoreBtn = ({
  learnMoreBtnName,
  learnMoreClicked,
  onLearnMoreBtnClick,
}: ILearnMoreBtn) => {
  return (
    <button
      className={learnMoreClicked ? "learn-more-btn-clicked" : "learn-more-btn"}
      onClick={onLearnMoreBtnClick}
    >
      {learnMoreBtnName}
    </button>
  );
};

LearnMoreBtn.propTypes = {
  learnMoreBtnName: PropTypes.string,
  learnMoreClicked: PropTypes.bool,
};

LearnMoreBtn.defaultProps = {
  learnMoreBtnName: "Learn More",
  learnMoreClicked: false,
};

export default LearnMoreBtn;
