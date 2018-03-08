import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { emojiSrc } from "../../utils/helpers";

const textStyles = css`
  margin: 20px 0 0 40px;
  font-size: 36px;
  color: #eee;
  text-align: left;
`;

const emojiStyles = css`
  height: 60px;
  width: 60px;
  padding: 10px;
`;

const dotEmojiStyles = css`
  height: 10px;
  width: 10px;
  margin: 25px 0;
`;

class WritingWorksheet extends Component {
  render() {
    return (
      <div className="WritingWorksheet">
        <h2>{`${this.props.language} - ${this.props.category}`}</h2>
        <ul>
          {this.props.flashcards.map(flashcard => (
            <li key={flashcard.vocabulary}>
              <div className="pure-g">
                <div className="pure-u-2-5">
                  <div className={textStyles}>{flashcard.vocabulary}</div>
                </div>
                <div className="pure-u-1-5">
                  <img src={emojiSrc("26ab")} className={dotEmojiStyles} />
                </div>
                <div className="pure-u-1-5">
                  <img src={emojiSrc("26ab")} className={dotEmojiStyles} />
                </div>
                <div className="pure-u-1-5">
                  <img
                    src={emojiSrc(flashcard.emojiCode)}
                    className={emojiStyles}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
    category: state.worksheet.category,
    language: state.worksheet.language
  };
}

export default connect(mapStateToProps)(WritingWorksheet);
