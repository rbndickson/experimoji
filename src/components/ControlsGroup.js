import React from "react";
import { css } from "@emotion/css"

const styles = css`
  margin: 20px 0;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const ControlsGroup = props => <div className={styles}>{props.children}</div>;

export default ControlsGroup;
