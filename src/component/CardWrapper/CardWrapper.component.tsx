import React from "react";
import { IWrapperProps } from "../../type-definition/Wrapper";
import "./CardWrapper.style.scss";

const CardWrapper = ({ children }: IWrapperProps) => {
  return <div className="card-wrapper">{children}</div>;
};

export default CardWrapper;
