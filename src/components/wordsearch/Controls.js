import React, { Component } from "react";
import { css } from "emotion";
import TextForm from "./TextForm";
import Button from "../Button";

const styles = css`
  width: 600px;
  margin: 0 auto;
  section {
    margin: 20px 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    section {
      margin: 5px 0;
    }
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

const removeWordInstructionStyles = css`
  margin-top: 10px;
  font-size: 14px;
  color: silver;
`;

class Controls extends Component {
  handleNewWordSubmit(word) {
    if (word !== "") {
      this.props.addWord(word);
    }
  }

  handleTitleSubmit(title) {
    this.props.updateTitle(title);
  }

  handleDiagonals(e) {
    this.props.updateIsIncludingDiagonals(e.target.checked);
  }

  render() {
    const MIN_WORDSEARCH_SIZE = 5;
    const MAX_WORDSEARCH_SIZE = 15;

    return this.props.view === "create" ? (
      <div className={styles}>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-sm-1-2">
            <section>
              <p>Size: {this.props.size}</p>
              <input
                type="range"
                value={this.props.size}
                min={MIN_WORDSEARCH_SIZE}
                max={MAX_WORDSEARCH_SIZE}
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
            <section>
              <Button
                text={"Print View"}
                classModifier={"Button-green"}
                onClick={() => this.props.showPrintView()}
              />
            </section>
          </div>
          <div className="pure-u-1 pure-u-sm-1-2">
            <section>
              <TextForm
                name="title"
                submitValue={"Edit Title"}
                handleSubmit={e => this.handleTitleSubmit(e)}
              />
            </section>
            <section>
              <TextForm
                name="word"
                submitValue={"Add Word"}
                handleSubmit={e => this.handleNewWordSubmit(e)}
              />
              <div className={removeWordInstructionStyles}>
                Click on word below to remove
              </div>
            </section>
            <section>
              <button
                className={buttonStyles}
                onClick={() => this.props.resetWordSearch()}
              >
                Reset
              </button>
              <button
                className={buttonStyles}
                onClick={() => this.props.clearWordSearch()}
              >
                Clear All
              </button>
            </section>
          </div>
        </div>
      </div>
    ) : (
      <div className={"non-print"}>
        <button
          className={buttonStyles}
          onClick={() => this.props.showCreateView()}
        >
          Show Settings
        </button>
        <h4>Print word search using your browser</h4>
      </div>
    );
  }
}

export default Controls;
