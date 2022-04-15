import React from "react";
import "./Suv.style.scss";
import IconSuvs from "../../asset/image/icon/icon-suvs.svg";
import LearnMoreBtn from "../LearnMoreBtn";
import { ILearnMoreClickedPropRender } from "../../type-definition/LearnMore";
import { useDarkModeContext } from "../../store/DarkMode/DarkMode.context-creator";

const Suv = ({
  learnMoreClicked,
  onLearnMoreBtnClick,
}: ILearnMoreClickedPropRender) => {
  const { darkMode } = useDarkModeContext();

  return (
    <section className={darkMode ? "dark-mode-suv" : "suv"}>
      <img src={IconSuvs} alt="Suv" className="icon-suvs" />
      <h2 className="suv-title">SUVs</h2>
      <p className="suv-paragraph">
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </p>
      <LearnMoreBtn
        learnMoreClicked={learnMoreClicked}
        onLearnMoreBtnClick={onLearnMoreBtnClick}
      />
    </section>
  );
};

export default Suv;
