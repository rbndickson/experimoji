import React from "react";
import { css } from "@emotion/css";

const styles = css`
  position: fixed;
  height: 20px;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 14px;
  color: #fff;

  a,
  a:hover {
    color: #bdddf4;
    text-decoration: none;
  }
`;

const AppFooter = () => (
  <div className={styles}>
    {"Graphics: "}
    <a href="https://github.com/twitter/twemoji">Twemoji</a>
    {" by Twitter ("}
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)
  </div>
);

export default AppFooter;
