import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css"
import { updateQuizScreen, resetQuiz } from "../../actions";
import BackButton from "../BackButton";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

class QuizFooter extends Component {
  goBack() {
    this.props.dispatch(resetQuiz());
    this.props.dispatch(updateQuizScreen("settings"));
  }

  render() {
    return (
      <div className={styles}>
        <BackButton
          onClick={() => {
            this.goBack();
          }}
        />
      </div>
    );
  }
}

export default connect()(QuizFooter);
