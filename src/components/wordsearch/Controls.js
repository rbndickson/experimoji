import React, { Component } from "react";
import { css } from "emotion";

const controlsStyles = css`
  margin: 20px 0;
`;

const textBoxStyles = css`
  border: solid 2px silver;
  border-radius: 4px;
  padding: 4px;
`;

class Controls extends Component {
  state = {
    newWord: ""
  };

  handleChange(e) {
    this.setState({ newWord: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ newWord: "" });
    this.props.addWord(this.state.newWord);
  }

  render() {
    return (
      <div>
        <section className={controlsStyles}>
          <p>Size: {this.props.size}</p>
          <input
            type="range"
            value={this.props.size}
            min="5"
            max="16"
            onChange={e => {
              this.props.updateSize(e.target.value);
            }}
          />
        </section>
        <section className={controlsStyles}>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              name="word"
              type="text"
              className={textBoxStyles}
              value={this.state.newWord}
              onChange={e => this.handleChange(e)}
            />
            <input type="submit" value="Add Word" />
          </form>
        </section>
      </div>
    );
  }
}

export default Controls;
