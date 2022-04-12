import React from "react";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/lauriselvijs/"
        target="_blank"
        rel="noreferrer"
      >
        Lauris
      </a>
      .
    </footer>
  );
};

export default Footer;
