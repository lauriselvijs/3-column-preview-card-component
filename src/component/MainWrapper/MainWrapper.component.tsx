import React from "react";
import "./MainWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const MainWrapper = ({ children }: IWrapperProps) => {
  return <div className="main-wrapper">{children}</div>;
};

export default MainWrapper;
