import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuizFooter.css";
import { updateQuizScreen, resetQuiz } from "../../actions";
import { emojiSrc } from "../../utils/helpers";

class QuizFooter extends Component {
  goBack() {
    this.props.dispatch(resetQuiz());
    this.props.dispatch(updateQuizScreen("settings"));
  }

  render() {
    return (
      <div className={"QuizFooter"}>
        <div>
          <img
            src={emojiSrc("1f519")}
            alt="Back button"
            className={"QuizFooter-back-icon"}
            onClick={() => {
              this.goBack();
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect()(QuizFooter);
