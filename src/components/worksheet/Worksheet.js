import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "../Title";
import WorksheetPage from "./WorksheetPage";

class Worksheet extends Component {
  render() {
    const ROWS_PER_PAGE = 10;
    const pages = Math.ceil(this.props.flashcards.length / ROWS_PER_PAGE);

    return (
      <div id="Worksheet">
        <Title text={`${this.props.language} - ${this.props.category}`} />
        {[...Array(pages)].map((_, i) => (
          <WorksheetPage
            key={`page-${i}`}
            pageIndex={i}
            rowsPerPage={ROWS_PER_PAGE}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    category: state.information.category,
    language: state.information.language,
  };
}

export default connect(mapStateToProps)(Worksheet);
