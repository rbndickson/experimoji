import React from "react";
import { css } from "@emotion/css";

const dotStyles = css`
  font-size: 36px;
  line-height: 60px;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const WorksheetDot = () => <div className={dotStyles}>•</div>;

export default WorksheetDot;
