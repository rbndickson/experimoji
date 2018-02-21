import React from "react";
import { css, cx } from "emotion";

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
  font-size: 16px;
`;

const inlineStyles = css`
  display: inline-block;
  margin: 5px;
`;

const styles = classModifier => {
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
  if (classModifier.includes("Button-inline")) {
    s.push(inlineStyles);
  }

  return cx(s);
};

const Button = ({ onClick, text, classModifier }) => (
  <div className={styles(classModifier)} onClick={onClick}>
    {text}
  </div>
);

export default Button;
