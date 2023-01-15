import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {`© Copyright ${year} Chi-Sheng Liu (劉奇聖)`}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme based on{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            developerFolio
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ashutosh1919/masterPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            masterPortfolio
          </a>
          .
        </p>
      </div>
    </Fade>
  );
}
