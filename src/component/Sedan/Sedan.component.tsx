import React, { useState } from "react";
import "./Sedan.style.scss";
import IconSedans from "../../asset/image/icon/icon-sedans.svg";
import LearnMoreBtn from "../LearnMoreBtn";

const Sedan = () => {
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false);

  const onLearnMoreBtnClick = (): void => {
    setLearnMoreClicked(!learnMoreClicked);
  };

  return (
    <section className="sedan">
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
