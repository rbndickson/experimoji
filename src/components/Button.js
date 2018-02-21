import React from "react";
import { css } from "emotion";

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

const Button = ({ onClick, text, classModifier }) => (
  <div
    className={classModifier ? `Button ${classModifier}` : "Button"}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Button;
