import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import {
  updateQuizScreen,
  updateQuizQuestionAmount,
  updateQuizLevel
} from "../../actions";
import Button from "../Button";

const headingStyles = css`
  margin: 20px 0;
`;

const questionAmountStyles = css`
  margin: 20px 0;
`;

const labelStyles = css`
  margin: 20px 0;
`;

class QuizSettings extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  handleQuestionAmountChange = e => {
    e.preventDefault();

    this.setQuestionAmount(e.target.value);
  };

  setQuestionAmount = questionAmount => {
    this.props.dispatch(updateQuizQuestionAmount(questionAmount));
  };

  handlelevelChange = level => {
    this.props.dispatch(updateQuizLevel(level));
  };

  render() {
    const maxQuestionAmount = Object.keys(this.props.flashcards).length;
    const questionAmounts = [5, 10, 20, maxQuestionAmount];

    return (
      <section>
        <h3 className={headingStyles}>Settings</h3>
        <form>
          <fieldset>
            <label>
              {`Number of Questions: `}
              <span>{this.props.questionAmount}</span>
              <div className={questionAmountStyles}>
                <input
                  type="range"
                  min="1"
                  max={maxQuestionAmount}
                  value={this.props.questionAmount}
                  name="questionAmount"
                  onChange={this.handleQuestionAmountChange}
                />
              </div>
              <div>
                {questionAmounts.map(e => (
                  <Button
                    key={parseInt(e, 0)}
                    classModifier={"Button-x-small Button-inline"}
                    text={parseInt(e, 0)}
                    onClick={() => this.setQuestionAmount(e)}
                  />
                ))}
              </div>
            </label>
          </fieldset>
          <fieldset>
            <div>
              <span className={labelStyles}>Level:</span>
              <input
                type="radio"
                id="easy"
                name="contact"
                value="easy"
                defaultChecked={this.props.level === "easy"}
                onChange={() => this.handlelevelChange("easy")}
              />
              <label>Easy</label>

              <input
                type="radio"
                id="medium"
                name="contact"
                value="medium"
                defaultChecked={this.props.level === "medium"}
                onChange={() => this.handlelevelChange("medium")}
              />
              <label>Medium</label>

              {/* <input
                type="radio"
                id="difficult"
                name="contact"
                value="difficult"
                defaultChecked={this.props.level === "difficult"}
                onChange={this.handlelevelChange}
              />
              <label>Difficult</label> */}
            </div>
          </fieldset>
        </form>
        <Button
          onClick={() => this.startQuiz()}
          text="Start Quiz"
          classModifier="Button-small"
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    questionAmount: state.quiz.questionAmount,
    level: state.quiz.level
  };
}

export default connect(mapStateToProps)(QuizSettings);
