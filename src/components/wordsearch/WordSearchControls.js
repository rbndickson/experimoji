import React, { Component } from "react";
import { css } from "emotion";
import WordSearchForm from "./WordSearchForm";
import ControlsGroup from "../ControlsGroup";
import Button from "../Button";

const removeWordInstructionStyles = css`
  margin: 10px 0;
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
      <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-1-2">
          <ControlsGroup>
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
          </ControlsGroup>
          <ControlsGroup>
            <input
              type="checkbox"
              id="isIncludingDiagonals"
              checked={this.props.isIncludingDiagonals}
              onChange={e => this.handleDiagonals(e)}
            />
            <label htmlFor="isIncludingDiagonals">Include Diagonals</label>
          </ControlsGroup>
          <ControlsGroup>
            <Button
              text={"Print View"}
              classModifier={"Button-green Button-medium"}
              onClick={() => this.props.showPrintView()}
            />
          </ControlsGroup>
        </div>
        <div className="pure-u-1 pure-u-sm-1-2">
          <ControlsGroup>
            <WordSearchForm
              name="title"
              submitValue={"Edit Title"}
              handleSubmit={e => this.handleTitleSubmit(e)}
            />
          </ControlsGroup>
          <ControlsGroup>
            <WordSearchForm
              name="word"
              submitValue={"Add Word"}
              handleSubmit={e => this.handleNewWordSubmit(e)}
            />
          </ControlsGroup>
          <div className={removeWordInstructionStyles}>
            Click on word below to remove
          </div>
          <ControlsGroup>
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
          </ControlsGroup>
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
