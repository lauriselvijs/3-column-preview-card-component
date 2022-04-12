import React from "react";
import { IWrapperProps } from "../../type-definition/Wrapper";
import "./CardWrapper.style.scss";

const CardWrapper = ({ children }: IWrapperProps) => {
  return <section className="card-wrapper">{children}</section>;
};

export default CardWrapper;
