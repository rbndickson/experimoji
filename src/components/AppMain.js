import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { css } from "emotion";
import { emojiSrc } from "../utils/helpers";
import Menu from "./Menu";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import Worksheet from "./worksheet/Worksheet";
import WordSearch from "./wordsearch/WordSearch";
import Pictionary from "./pictionary/Pictionary";

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
    this.props.flashcards.forEach(e => {
      let imageObject = new Image();
      imageObject.src = emojiSrc(e.emojiCode);
    });
  }

  wrapperStyles(path) {
    const miniApps = ["/", "/quiz", "/memorygame"];

    return css`
      margin: 0 auto;
      min-width: 360px;
      max-width: ${miniApps.includes(path) ? "600" : "800"}px;
    `;
  }

  render() {
    return (
      <div className={this.wrapperStyles(this.props.location.pathname)}>
        <main className={styles}>
          <Route exact path="/" component={Menu} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/memorygame" component={Memory} />
          <Route path="/worksheet" component={Worksheet} />
          <Route path="/wordsearch" component={WordSearch} />
          <Route path="/pictionary" component={Pictionary} />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards)
  };
}

export default withRouter(connect(mapStateToProps)(AppMain));
