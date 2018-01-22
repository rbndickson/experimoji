import { UPDATE_CURRENT_EXPERIMENT } from "../actions";

const initialExperimentsState = {
  currentExperiment: "None"
};

function experiments(state = initialExperimentsState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_EXPERIMENT:
      return {
        ...state,
        currentExperiment: action.experimentName
      };
    default:
      return state;
  }
}

export default experiments;
