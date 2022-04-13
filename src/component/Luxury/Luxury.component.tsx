import React, { useState } from "react";
import "./Luxury.style.scss";
import IconLuxury from "../../asset/image/icon/icon-luxury.svg";
import LearnMoreBtn from "../LearnMoreBtn";

const Luxury = () => {
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false);

  const onLearnMoreBtnClick = (): void => {
    setLearnMoreClicked(!learnMoreClicked);
  };

  return (
    <section className="luxury">
      <img src={IconLuxury} alt="Luxury car" className="icon-luxury" />
      <h1 className="luxury-title">Luxury</h1>
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
