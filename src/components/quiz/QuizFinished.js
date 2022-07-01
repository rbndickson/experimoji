import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
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

function QuizFinished({
  dispatch,
  currentQuestionIndex,
  category,
  language,
  questions,
  score,
}) {
  const goToSettings = () => {
    dispatch(updateQuizScreen("settings"));
    dispatch(resetQuiz());
  };

  const tryAgainNewCards = () => {
    dispatch(updateQuizScreen("game"));
    dispatch(setQuestions(undefined));
    dispatch(resetQuiz());
  };

  const tryAgainSameCards = () => {
    dispatch(setQuestions(questions));
    dispatch(updateQuizScreen("game"));
    dispatch(resetQuiz());
  };

  const sharingText = `I scored ${score} out of ${currentQuestionIndex} on the ${language} ${category} emoji quiz! How about you?`;

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
          onClick={() => tryAgainSameCards()}
          text={"Retry Same Cards"}
          classModifier={"Button-medium"}
        />
        <Button
          onClick={() => tryAgainNewCards()}
          text={"Try Again With New Cards"}
          classModifier={"Button-medium"}
        />
        <Button
          onClick={() => goToSettings()}
          text={"Settings"}
          classModifier={"Button-medium"}
        />
        <QuizResultsList />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    questions: state.quiz.questions,
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    language: state.quiz.language,
    category: state.quiz.category,
  };
}

export default connect(mapStateToProps)(QuizFinished);
