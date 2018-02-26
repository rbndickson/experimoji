import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { updateQuizScreen } from "../../actions";
import QuizSettings from "./QuizSettings";
import QuizStartImages from "./QuizStartImages";
import Button from "../Button";

const styles = css`
  * {
    font-family: "Varela Round", sans-serif;
  }
`;

class QuizStart extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  render() {
    return (
      <div className={styles}>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2">
            <QuizSettings />
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <QuizStartImages />
            <Button
              onClick={() => this.startQuiz()}
              text="Start!"
              classModifier="Button-green"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QuizStart);
