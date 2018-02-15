import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import QuizButton from "./QuizButton";

const styles = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const colStyles = css`
  flex: 1;
`;

class QuizButtons extends Component {
  render() {
    const { answers } = this.props;

    return this.props.level === "easy" ? (
      <div className={styles}>
        {answers.map(e => <QuizButton key={e} answer={e} />)}
      </div>
    ) : (
      <div className={styles}>
        <div className={colStyles}>
          {answers.splice(0, 3).map(e => <QuizButton key={e} answer={e} />)}
        </div>
        <div className={colStyles}>
          {answers.splice(0, 3).map(e => <QuizButton key={e} answer={e} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    level: state.quiz.level
  };
}

export default connect(mapStateToProps)(QuizButtons);
