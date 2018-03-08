import React, { Component } from "react";
import { css } from "emotion";
import { emojiSrc } from "../../utils/helpers";

const textStyles = css`
  margin: 20px 0 0 20px;
  font-family: "Fredoka One", sans-serif;
  font-size: 36px;
  text-align: left;
  color: #000;
  opacity: 0.25;
`;

const emojiStyles = css`
  height: 60px;
  width: 60px;
  padding: 10px;
`;

const dotStyles = css`
  margin: 20px 0 0 0;
  font-size: 42px;
`;

class Worksheet extends Component {
  render() {
    const flashcardLeft = this.props.flashcardLeft;
    const flashcardRight = this.props.flashcardRight;

    return (
      <li>
        <div className="pure-g">
          <div className="pure-u-2-5">
            <div className={textStyles}>{flashcardLeft.vocabulary}</div>
          </div>
          <div className="pure-u-1-5">
            <div className={dotStyles}>•</div>
          </div>
          <div className="pure-u-1-5">
            <div className={dotStyles}>•</div>
          </div>
          <div className="pure-u-1-5">
            <img
              alt={flashcardRight.vocabulary}
              src={emojiSrc(flashcardRight.emojiCode)}
              className={emojiStyles}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default Worksheet;
