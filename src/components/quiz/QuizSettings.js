import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
import { updateQuizQuestionAmount, updateQuizLevel } from "../../actions";
import Button from "../Button";

const settingsTextStyles = css`
  font-size: 18px;
`;

const questionAmountStyles = css`
  font-size: 64px;
`;

const inputStyles = css`
  margin: 20px 2px 6px 10px;
`;

class QuizSettings extends Component {
  handleQuestionAmountChange = (e) => {
    e.preventDefault();

    this.setQuestionAmount(e.target.value);
  };

  setQuestionAmount = (questionAmount) => {
    this.props.dispatch(updateQuizQuestionAmount(questionAmount));
  };

  handlelevelChange = (level) => {
    this.props.dispatch(updateQuizLevel(level));
  };

  render() {
    const maxQuestionAmount = Object.keys(this.props.flashcards).length;
    const questionAmounts = [5, 10, 20, maxQuestionAmount].filter(
      (e) => e <= maxQuestionAmount
    );

    return (
      <section>
        <form>
          <fieldset>
            <label className={settingsTextStyles}>
              {`Questions:`}
              <div className={questionAmountStyles}>
                {this.props.questionAmount}
              </div>
              <div>
                {questionAmounts.map((e) => (
                  <Button
                    key={parseInt(e, 0)}
                    classModifier={"Button-x-small Button-inline"}
                    text={e === maxQuestionAmount ? "Max" : parseInt(e, 0)}
                    onClick={() => this.setQuestionAmount(e)}
                  />
                ))}
              </div>
            </label>
          </fieldset>
          <fieldset>
            <div>
              <div className={settingsTextStyles}>Level:</div>
              <input
                className={inputStyles}
                type="radio"
                id="easy"
                name="contact"
                value="easy"
                defaultChecked={this.props.level === "easy"}
                onChange={() => this.handlelevelChange("easy")}
              />
              <label htmlFor="easy">Easy</label>

              <input
                className={inputStyles}
                type="radio"
                id="medium"
                name="contact"
                value="medium"
                defaultChecked={this.props.level === "medium"}
                onChange={() => this.handlelevelChange("medium")}
              />
              <label htmlFor="medium">Medium</label>

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
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    questionAmount: state.quiz.questionAmount,
    level: state.quiz.level,
  };
}

export default connect(mapStateToProps)(QuizSettings);
