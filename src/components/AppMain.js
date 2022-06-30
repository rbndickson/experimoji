import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { css } from "@emotion/css";
import { emojiSrc } from "../utils/helpers";
import Menu from "./Menu";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import Worksheet from "./worksheet/Worksheet";
import WordSearch from "./wordsearch/WordSearch";
import Pictionary from "./pictionary/Pictionary";

const wrapperStyles = css`
  margin: 0 auto;
  min-width: 360px;
  max-width: 800px;
`;

const styles = css`
  position: relative;
  background-color: #fff;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

class AppMain extends Component {
  componentDidMount() {
    this.preloadImages();
  }

  preloadImages() {
    this.props.flashcards.forEach((e) => {
      let imageObject = new Image();
      imageObject.src = emojiSrc(e.emojiCode);
    });
  }

  render() {
    return (
      <div className={wrapperStyles}>
        <main className={styles}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/memorygame" element={<Memory />} />
            <Route path="/worksheet" element={<Worksheet />} />
            <Route path="/wordsearch" element={<WordSearch />} />
            <Route path="/pictionary" element={<Pictionary />} />
          </Routes>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
  };
}

export default connect(mapStateToProps)(AppMain);
