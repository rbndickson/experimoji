import React, { Component } from "react";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import Worksheet from "./worksheet/Worksheet";

class Experiment extends Component {
  render() {
    return (
      <div>
        {this.props.name === "Quiz" && <Quiz />}
        {this.props.name === "Memory Game" && <Memory />}
        {this.props.name === "Writing Practise Worksheet" && <Worksheet />}
      </div>
    );
  }
}

export default Experiment;
