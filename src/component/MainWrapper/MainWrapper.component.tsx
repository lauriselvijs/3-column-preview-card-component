import React from "react";
import "./MainWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const MainWrapper = ({ children }: IWrapperProps) => {
  return <main className="main-wrapper">{children}</main>;
};

export default MainWrapper;
