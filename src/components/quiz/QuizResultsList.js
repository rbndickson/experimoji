import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
import QuizResultsItem from "./QuizResultsItem";

const styles = css`
  max-width: 400px;
  margin: 0 auto;
`;

function QuizResultsList({ currentQuestionIndex, score, questions }) {
  return (
    <div className={styles}>
      <h3>Review</h3>
      {score < currentQuestionIndex && (
        <div>
          <h4>Words you answered incorrectly:</h4>
          <ul>
            {questions
              .filter((question) => question.answerResult === "incorrect")
              .map((question) => (
                <QuizResultsItem
                  vocabulary={question.vocabulary}
                  emojiCode={question.emojiCode}
                  key={`${question.vocabulary}${question.emojiCode}`}
                />
              ))}
          </ul>
        </div>
      )}
      {score > 0 && (
        <div>
          <h4>Words you answered correctly:</h4>
          <ul>
            {questions
              .filter((question) => question.answerResult === "correct")
              .map((question) => (
                <QuizResultsItem
                  vocabulary={question.vocabulary}
                  emojiCode={question.emojiCode}
                  key={`${question.vocabulary}${question.emojiCode}`}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    questions: Object.values(state.quiz.questions),
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
  };
}

export default connect(mapStateToProps)(QuizResultsList);
