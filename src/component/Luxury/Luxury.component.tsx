import React from "react";
import "./Luxury.style.scss";
import IconLuxury from "../../asset/image/icon/icon-luxury.svg";
import LearnMoreBtn from "../LearnMoreBtn";
import { ILearnMoreClickedPropRender } from "../../type-definition/LearnMore";
import { useDarkModeContext } from "../../store/DarkMode/DarkMode.context-creator";

const Luxury = ({
  learnMoreClicked,
  onLearnMoreBtnClick,
}: ILearnMoreClickedPropRender) => {
  const { darkMode } = useDarkModeContext();

  return (
    <section className={darkMode ? "dark-mode-luxury" : "luxury"}>
      <img src={IconLuxury} alt="Luxury car" className="icon-luxury" />
      <h2 className="luxury-title">Luxury</h2>
      <p className="luxury-paragraph">
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </p>
      <LearnMoreBtn
        learnMoreClicked={learnMoreClicked}
        onLearnMoreBtnClick={onLearnMoreBtnClick}
      />
    </section>
  );
};

export default Luxury;
