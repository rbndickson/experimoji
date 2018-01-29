import React from "react";
import "./Button.css";

const Button = ({ onClick, text }) => (
  <div className="Button" onClick={onClick}>
    {text}
  </div>
);

export default Button;
