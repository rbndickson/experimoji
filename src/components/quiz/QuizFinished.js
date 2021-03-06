import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { updateQuizScreen, resetQuiz, setQuestions } from "../../actions";
import Emoji from "../Emoji";
import QuizResult from "./QuizResult";
import QuizResultEmoji from "./QuizResultEmoji";
import QuizResultsList from "./QuizResultsList";
import Button from "../Button";

const sharingListStyles = css`
  width: 200px;
  margin: 0 auto 20px;
  text-align: center;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

class QuizFinished extends Component {
  goToSettings() {
    this.props.dispatch(updateQuizScreen("settings"));
    this.props.dispatch(resetQuiz());
  }

  tryAgainNewCards() {
    this.props.dispatch(updateQuizScreen("game"));
    this.props.dispatch(setQuestions(undefined));
    this.props.dispatch(resetQuiz());
  }

  tryAgainSameCards() {
    this.props.dispatch(setQuestions(this.props.questions));
    this.props.dispatch(updateQuizScreen("game"));
    this.props.dispatch(resetQuiz());
  }

  render() {
    const sharingText = `I scored ${this.props.score} out of ${
      this.props.currentQuestionIndex
    } on the ${this.props.language} ${
      this.props.category
    } emoji quiz! How about you?`;

    const twitterLink = `https://twitter.com/intent/tweet?text=${sharingText}`;

    return (
      <div>
        <h2>Quiz Complete!</h2>
        <QuizResult />
        <QuizResultEmoji />
        <div>
          <ul className={sharingListStyles}>
            <li>
              <a href={twitterLink} target="popup">
                Share on Twitter
                <Emoji emojiCode={"1f426"} altText="" inline={true} />
              </a>
            </li>
          </ul>
        </div>
        <div className={"QuizFinished-buttons"}>
          <Button
            onClick={() => this.tryAgainSameCards()}
            text={"Retry Same Cards"}
            classModifier={"Button-medium"}
          />
          <Button
            onClick={() => this.tryAgainNewCards()}
            text={"Try Again With New Cards"}
            classModifier={"Button-medium"}
          />
          <Button
            onClick={() => this.goToSettings()}
            text={"Settings"}
            classModifier={"Button-medium"}
          />
          <QuizResultsList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.quiz.questions,
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    language: state.quiz.language,
    category: state.quiz.category
  };
}

export default connect(mapStateToProps)(QuizFinished);
