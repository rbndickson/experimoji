import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import QuizResultsItem from "./QuizResultsItem";

const styles = css`
  max-width: 400px;
  margin: 0 auto;
`;

class QuizResultsList extends Component {
  render() {
    return (
      <div className={styles}>
        <h3>Review</h3>
        {this.props.score < this.props.currentQuestionIndex && (
          <div>
            <h4>Words you answered incorrectly:</h4>
            <ul>
              {this.props.questions
                .filter(question => question.answerResult === "incorrect")
                .map(question => (
                  <QuizResultsItem
                    vocabulary={question.vocabulary}
                    emojiCode={question.emojiCode}
                    key={`${question.vocabulary}${question.emojiCode}`}
                  />
                ))}
            </ul>
          </div>
        )}
        {this.props.score > 0 && (
          <div>
            <h4>Words you answered correctly:</h4>
            <ul>
              {this.props.questions
                .filter(question => question.answerResult === "correct")
                .map(question => (
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
}

function mapStateToProps(state) {
  return {
    questions: Object.values(state.quiz.questions),
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizResultsList);
