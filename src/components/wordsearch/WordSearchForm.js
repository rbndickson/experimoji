import React, { Component } from "react";
import { css } from "emotion";

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

const buttonStyles = css`
  padding: 4px 8px;
  margin: 4px;
  border: 0;
  border-bottom: 2px solid #ffac33;
  border-radius: 5px;
  font-family: "Varela Round", sans-serif;
  font-size: 14px;
  color: #000;
  background-color: #ffe8b6;
  cursor: pointer;

  &:hover {
    background-color: #ffe09e;
  }

  text-decoration: none !important;
`;

class WordSearchForm extends Component {
  state = {
    inputValue: ""
  };

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <form className={formStyles} onSubmit={e => this.handleSubmit(e)}>
        <input
          name={this.props.name}
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="submit"
          value={this.props.submitValue}
          className={buttonStyles}
        />
      </form>
    );
  }
}

export default WordSearchForm;
