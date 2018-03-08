import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { css } from "emotion";

const wrapperStyles = css`
  max-width: 600px;
  margin: 0 auto;
`;

const mainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 600px;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

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
      <div className={wrapperStyles}>
        <main className={mainStyles}>
          <ul>
            {this.state.experiments.map(e => (
              <MenuItem key={e.name} name={e.name} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Menu;
