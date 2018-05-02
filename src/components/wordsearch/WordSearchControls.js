import React, { Component } from "react";
import { css } from "emotion";
import WordSearchForm from "./WordSearchForm";
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

const removeWordInstructionStyles = css`
  margin-top: 10px;
  font-size: 14px;
  color: silver;
`;

class WordSearchControls extends Component {
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
              <WordSearchForm
                name="title"
                submitValue={"Edit Title"}
                handleSubmit={e => this.handleTitleSubmit(e)}
              />
            </section>
            <section>
              <WordSearchForm
                name="word"
                submitValue={"Add Word"}
                handleSubmit={e => this.handleNewWordSubmit(e)}
              />
              <div className={removeWordInstructionStyles}>
                Click on word below to remove
              </div>
            </section>
            <section>
              <Button
                text={"Reset"}
                classModifier={"Button-control Button-inline"}
                onClick={() => this.props.resetWordSearch()}
              />
              <Button
                text={"Clear All"}
                classModifier={"Button-control Button-inline"}
                onClick={() => this.props.clearWordSearch()}
              />
            </section>
          </div>
        </div>
      </div>
    ) : (
      <div className={"non-print"}>
        <Button
          text={"Show Settings"}
          classModifier={"Button-control Button-inline"}
          onClick={() => this.props.showCreateView()}
        />
        <h4>Print word search using your browser</h4>
      </div>
    );
  }
}

export default WordSearchControls;
