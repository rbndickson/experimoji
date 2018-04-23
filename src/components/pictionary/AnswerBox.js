import React from "react";
import { css } from "emotion";

const styles = css`
  height: 40px;
  width: 160px;
  margin: 0 10px;
  border: 2px solid #000;
  border-radius: 4px;
`;

const AnswerBox = () => {
  return <div className={styles} />;
};

export default AnswerBox;
