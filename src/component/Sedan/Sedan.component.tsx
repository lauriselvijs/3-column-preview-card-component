import React from "react";
import "./Sedan.style.scss";
import IconSedans from "../../asset/image/icon/icon-sedans.svg";
import LearnMoreBtn from "../LearnMoreBtn";
import { ILearnMoreClickedPropRender } from "../../type-definition/LearnMore";
import { useDarkModeContext } from "../../store/DarkMode/DarkMode.context-creator";

const Sedan = ({
  learnMoreClicked,
  onLearnMoreBtnClick,
}: ILearnMoreClickedPropRender) => {
  const { darkMode } = useDarkModeContext();

  return (
    <section className={darkMode ? "dark-mode-sedan" : "sedan"}>
      <img src={IconSedans} alt="Sedan" className="icon-sedans" />
      <h2 className="sedan-title">Sedan</h2>
      <p className="sedan-paragraph">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <LearnMoreBtn
        learnMoreClicked={learnMoreClicked}
        onLearnMoreBtnClick={onLearnMoreBtnClick}
      />
    </section>
  );
};

export default Sedan;
