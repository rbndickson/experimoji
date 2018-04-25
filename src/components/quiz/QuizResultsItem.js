import React, { Component } from "react";
import { connect } from "react-redux";
import Emoji from "../Emoji";
import { css } from "emotion";

const styles = css`
  display: flex;
  align-items: center;
  max-width: 200px;
  margin: 0 auto 6px auto;
`;

class QuizResultsItem extends Component {
  render() {
    return (
      <li className={styles}>
        <Emoji
          emojiCode={this.props.emojiCode}
          styles={{ width: 25, height: 25, marginRight: 10 }}
          altText={this.props.vocabulary}
        />
        {this.props.vocabulary}
      </li>
    );
  }
}

export default connect()(QuizResultsItem);
