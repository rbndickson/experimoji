import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import "./Experiment.css";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import WritingWorksheet from "./writingWorksheet/WritingWorksheet";
import Button from "./Button";

class Experiment extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <div>
        <h1 className="Experiment-title">{this.props.name}</h1>
        {this.props.name === "Quiz" && <Quiz />}
        {this.props.name === "Memory Game" && <Memory />}
        {this.props.name === "Writing Practise Worksheet" && (
          <WritingWorksheet />
        )}

        <Button
          onClick={() => {
            this.goHome();
          }}
          text="Home"
          classModifier="Button-small"
        />
      </div>
    );
  }
}

export default connect()(Experiment);
