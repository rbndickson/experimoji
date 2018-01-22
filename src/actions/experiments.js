export const UPDATE_CURRENT_EXPERIMENT = "UPDATE_CURRENT_EXPERIMENT";

export function updateCurrentExperiment(experimentName) {
  console.log("hihi");

  return {
    type: UPDATE_CURRENT_EXPERIMENT,
    experimentName
  };
}
