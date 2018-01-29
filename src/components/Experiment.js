import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import WritingWorksheet from "./writingWorksheet/WritingWorksheet";

class Experiment extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {this.props.name === "Quiz" && <Quiz />}
        {this.props.name === "Memory Game" && <Memory />}
        {this.props.name === "Writing Practise Worksheet" && (
          <WritingWorksheet />
        )}
        <button onClick={this.goHome}>Home</button>
      </div>
    );
  }
}

export default connect()(Experiment);
