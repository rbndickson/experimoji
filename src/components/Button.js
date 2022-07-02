import React from "react";
import { css, cx } from "@emotion/css";

const baseStyles = css`
  padding: 10px 0;
  margin: 10px;
  border-bottom: 4px solid #ffac33;
  border-radius: 5px;
  font-family: "Varela Round", sans-serif;
  font-size: 24px;
  color: #000;
  background-color: #ffe8b6;
  cursor: pointer;

  &:hover {
    background-color: #ffe09e;
  }

  text-decoration: none !important;
`;

const controlStyles = css`
  width: auto;
  padding: 4px 8px;
  margin: 4px;
  border: 0;
  border-bottom: 2px solid #ffac33;
  font-size: 14px;
`;

const xSmallStyles = css`
  width: 60px;
  margin: 6px auto;
  font-size: 16px;
`;

const smallStyles = css`
  width: 100px;
  margin: 10px auto;
  font-size: 16px;
`;

const mediumStyles = css`
  width: 250px;
  margin: 10px auto;
  font-size: 18px;
`;

const inlineStyles = css`
  display: inline-block;
  margin: 5px;
`;

const blueStyles = css`
  background-color: #a5d6fa;
  border-bottom: 4px solid #55acee;

  &:hover {
    background-color: #91cdf8;
  }
`;

const greenStyles = css`
  background-color: #d2eac2;
  border-bottom: 4px solid #77b255;

  &:hover {
    background-color: #c6e5b3;
  }
`;

const styles = (classModifier) => {
  let s = [baseStyles];

  if (!classModifier) {
    return s;
  }

  if (classModifier.includes("Button-x-small")) {
    s.push(xSmallStyles);
  }
  if (classModifier.includes("Button-small")) {
    s.push(smallStyles);
  }
  if (classModifier.includes("Button-medium")) {
    s.push(mediumStyles);
  }
  if (classModifier.includes("Button-control")) {
    s.push(controlStyles);
  }
  if (classModifier.includes("Button-inline")) {
    s.push(inlineStyles);
  }
  if (classModifier.includes("Button-blue")) {
    s.push(blueStyles);
  }
  if (classModifier.includes("Button-green")) {
    s.push(greenStyles);
  }
  return cx(s);
};

const Button = ({ onClick, text, classModifier }) => (
  <div className={styles(classModifier)} onClick={onClick}>
    {text}
  </div>
);

export default Button;
