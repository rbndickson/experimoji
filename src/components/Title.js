import React from "react";
import { css } from "@emotion/css"

const styles = css`
  font-size: 32px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Title = props => <h1 className={styles}>{props.text}</h1>;

export default Title;
