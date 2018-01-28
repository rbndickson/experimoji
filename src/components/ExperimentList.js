import React, { Component } from "react";
import ExperimentListHeader from "./ExperimentListHeader";
import ExperimentListItem from "./ExperimentListItem";

class ExperimentList extends Component {
  state = {
    experiments: [
      { name: "Quiz" },
      { name: "Memory Game" },
      { name: "Writing Practise Worksheet" }
    ]
  };

  render() {
    return (
      <div>
        <ExperimentListHeader />
        <ul>
          {this.state.experiments.map(e => (
            <ExperimentListItem key={e.name} name={e.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ExperimentList;
