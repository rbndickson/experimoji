import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  width: 600px;
  margin: 0 auto;
  section {
    margin: 20px 0;
  }
`;

const formStyles = css`
  display: block;
  input[type="text"] {
    width: 184px;
    border: solid 2px silver;
    border-radius: 4px;
    padding: 4px;
  }
  input[type="submit"] {
    margin-top: 10px;
    width: 200px;
  }
`;

const removeWordInstructionStyles = css`
  margin-top: 10px;
  font-size: 14px;
  color: silver;
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
    if (this.state.newWord !== "") {
      this.props.addWord(this.state.newWord);
      this.setState({ newWord: "" });
    }
  }

  handleDiagonals(e) {
    this.props.updateIsIncludingDiagonals(e.target.checked);
  }

  render() {
    return (
      <div className={styles}>
        <div className="pure-g">
          <div className="pure-u-1-2">
            <section>
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
            <section>
              <input
                type="checkbox"
                id="isIncludingDiagonals"
                checked={this.props.isIncludingDiagonals}
                onChange={e => this.handleDiagonals(e)}
              />
              <label htmlFor="isIncludingDiagonals">Include Diagonals</label>
            </section>
          </div>
          <div className="pure-u-1-2">
            <section>
              <form className={formStyles} onSubmit={e => this.handleSubmit(e)}>
                <input
                  name="word"
                  type="text"
                  value={this.state.newWord}
                  onChange={e => this.handleChange(e)}
                />
                <input type="submit" value="Add Word" />
              </form>
              <div className={removeWordInstructionStyles}>
                Click on word below to remove words
              </div>
            </section>
            <section>
              <button onClick={() => this.props.resetWordSearch()}>
                Reset
              </button>
              <button onClick={() => this.props.clearWordSearch()}>
                Clear All
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
