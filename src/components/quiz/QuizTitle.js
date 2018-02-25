import React, { Component } from "react";
import { connect } from "react-redux";

class QuizTitle extends Component {
  render() {
    return <h1>{`${this.props.language} ${this.props.category} Quiz`}</h1>;
  }
}

function mapStateToProps(state) {
  return {
    language: state.quiz.language,
    category: state.quiz.category
  };
}

export default connect(mapStateToProps)(QuizTitle);
