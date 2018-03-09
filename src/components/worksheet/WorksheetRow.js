import React, { Component } from "react";
import { css } from "emotion";
import { emojiSrc } from "../../utils/helpers";

const textStyles = css`
  margin-left: 10px;
  font-family: "Fredoka One", sans-serif;
  font-size: 36px;
  line-height: 60px;
  text-align: left;
  color: #000;
  opacity: 0.25;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 30px;
  }
`;

const emojiStyles = css`
  height: 60px;

  @media (max-width: 600px) {
    height: 24px;
    padding: 3px 0;
  }
`;

const dotStyles = css`
  font-size: 36px;
  line-height: 60px;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

class Worksheet extends Component {
  render() {
    const flashcardLeft = this.props.flashcardLeft;
    const flashcardRight = this.props.flashcardRight;

    return (
      <li>
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className={textStyles}>{flashcardLeft.vocabulary}</div>
          </div>
          <div className="pure-u-1-4">
            <div className={dotStyles}>•</div>
          </div>
          <div className="pure-u-1-8">
            <div className={dotStyles}>•</div>
          </div>
          <div className="pure-u-1-8">
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
