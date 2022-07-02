import React, { Component } from "react";
import { css } from "@emotion/css";
import Emoji from "./Emoji";

const styles = css`
  width: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-animation: all 0.2s linear infinite;

  &:hover {
    margin-left: -2px;
  }
`;

class BackButton extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onClick();
        }}
      >
        <Emoji emojiCode={"1f519"} alt="Back button" styles={styles} />
      </div>
    );
  }
}

export default BackButton;
