import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen, updateQuizQuestionAmount } from "../../actions";
import Button from "../Button";

class QuizSettings extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  handleQuestionAmountChange = e => {
    e.preventDefault();

    this.props.dispatch(updateQuizQuestionAmount(e.target.value));
  };

  render() {
    const maxQuestionAmount = Object.keys(this.props.flashcards).length;

    return (
      <section>
        <div>Settings</div>
        <form>
          <label>
            {`Number of Questions (Max ${maxQuestionAmount}):`}
            <div>
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
    questionAmount: state.quiz.questionAmount
  };
}

export default connect(mapStateToProps)(QuizSettings);
