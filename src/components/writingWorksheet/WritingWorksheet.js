import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import "./WritingWorksheet.css";
import { emojiSrc, shuffle } from "../../utils/helpers";

const headingStyles = css`
  font-size: 36px;
`;

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

const dotEmojiStyles = css`
  height: 10px;
  width: 10px;
  margin: 25px 0;
`;

class WritingWorksheet extends Component {
  state = {
    shuffledFlashcards: []
  };

  componentWillMount() {
    this.setState({
      shuffledFlashcards: shuffle(this.props.flashcards)
    });
  }

  render() {
    return (
      <div id="WritingWorksheet">
        <h2 className={headingStyles}>{`${this.props.language} - ${
          this.props.category
        }`}</h2>
        <ul>
          {this.props.flashcards.map((flashcard, i) => (
            <li key={flashcard.vocabulary}>
              <div className="pure-g">
                <div className="pure-u-2-5">
                  <div className={textStyles}>{flashcard.vocabulary}</div>
                </div>
                <div className="pure-u-1-5">
                  <img
                    alt=""
                    src={emojiSrc("26ab")}
                    className={dotEmojiStyles}
                  />
                </div>
                <div className="pure-u-1-5">
                  <img
                    alt=""
                    src={emojiSrc("26ab")}
                    className={dotEmojiStyles}
                  />
                </div>
                <div className="pure-u-1-5">
                  <img
                    alt={this.state.shuffledFlashcards[i].vocabulary}
                    src={emojiSrc(this.state.shuffledFlashcards[i].emojiCode)}
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
