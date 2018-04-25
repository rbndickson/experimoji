import React from "react";
import { css } from "emotion";

const baseStyles = css`
  margin: 0 10px;
  border: 2px solid #000;
  border-radius: 4px;
`;

const AnswerBox = props => <div className={css(baseStyles, props.styles)} />;

export default AnswerBox;
