import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
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
        <ul>
          {this.state.experiments.map(e => (
            <MenuItem key={e.name} name={e.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
