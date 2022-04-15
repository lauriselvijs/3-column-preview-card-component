import React from "react";
import "./DarkModeBtn.style.scss";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudMoonFill } from "react-icons/bs";
import { useDarkModeContext } from "../../store/DarkMode/DarkMode.context-creator";

const DarkModeBtn = () => {
  const { setDarkMode, darkMode } = useDarkModeContext();

  const onDarkModeBtnClick = () => {
    setDarkMode();
  };

  console.log(darkMode);

  return (
    <button className="dark-mode-btn" onClick={onDarkModeBtnClick}>
      {darkMode ? <BsCloudSun /> : <BsCloudMoonFill />}
    </button>
  );
};

export default DarkModeBtn;
