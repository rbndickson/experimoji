import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    experiments: [
      { name: "Quiz", link: "quiz" },
      { name: "Memory Game", link: "memorygame" },
      { name: "Writing Practise Worksheet", link: "worksheet" },
      { name: "Word Search Generator", link: "wordsearch" },
      { name: "Pictionary", link: "pictionary" },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.experiments.map((e) => (
          <MenuItem key={e.name} name={e.name} link={e.link} />
        ))}
      </ul>
    );
  }
}

export default Menu;
