import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiSrc } from "../../utils/helpers";
import "./QuizResultsItem.css";

class QuizResultsItem extends Component {
  render() {
    return (
      <li className={"QuizResultsItem"}>
        <img
          src={emojiSrc(this.props.emojiCode)}
          className={"QuizResultsItem-emoji"}
        />
        {this.props.word}
      </li>
    );
  }
}

export default connect()(QuizResultsItem);
