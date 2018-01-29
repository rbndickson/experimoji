import React from "react";
import "./Button.css";

const Button = ({ onClick, text, classModifier }) => (
  <div
    className={classModifier ? `Button ${classModifier}` : "Button"}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Button;
