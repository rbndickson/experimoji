import React, { Component } from "react";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import WritingWorksheet from "./writingWorksheet/WritingWorksheet";

class Experiment extends Component {
  render() {
    return (
      <div>
        {this.props.name === "Quiz" && <Quiz />}
        {this.props.name === "Memory Game" && <Memory />}
        {this.props.name === "Writing Practise Worksheet" && (
          <WritingWorksheet />
        )}
      </div>
    );
  }
}

export default Experiment;
