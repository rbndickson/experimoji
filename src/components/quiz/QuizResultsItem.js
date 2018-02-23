import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiSrc } from "../../utils/helpers";
import { css } from "emotion";

const styles = css`
  display: flex;
  align-items: center;
  max-width: 200px;
  margin: 0 auto 6px auto;
`;

const emojiStyles = css`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

class QuizResultsItem extends Component {
  render() {
    return (
      <li className={styles}>
        <img
          src={emojiSrc(this.props.emojiCode)}
          className={emojiStyles}
          alt={this.props.vocabulary}
        />
        {this.props.vocabulary}
      </li>
    );
  }
}

export default connect()(QuizResultsItem);
