import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateQuizScreen,
  updateQuizQuestionAmount,
  updateQuizLevel
} from "../../actions";
import "./QuizSettings.css";
import Button from "../Button";

class QuizSettings extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  handleQuestionAmountChange = e => {
    e.preventDefault();

    this.props.dispatch(updateQuizQuestionAmount(e.target.value));
  };

  handlelevelChange = level => {
    this.props.dispatch(updateQuizLevel(level));
  };

  render() {
    const maxQuestionAmount = Object.keys(this.props.flashcards).length;

    return (
      <section className="QuizSettings">
        <h3>Settings</h3>
        <form>
          <fieldset>
            <label>
              {`Number of Questions (Max ${maxQuestionAmount}):`}
              <div className="QuizSettings-question-amount">
                <input
                  type="range"
                  min="1"
                  max={maxQuestionAmount}
                  value={this.props.questionAmount}
                  name="questionAmount"
                  onChange={this.handleQuestionAmountChange}
                />
              </div>
              <p>{this.props.questionAmount}</p>
            </label>
          </fieldset>
          <fieldset>
            <p className={"QuizSettings-label"}>Level:</p>
            <div>
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
