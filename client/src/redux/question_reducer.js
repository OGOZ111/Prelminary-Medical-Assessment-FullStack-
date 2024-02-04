import { createSlice } from "@reduxjs/toolkit";

// create reducer with initial value
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0, // this value changes the index of the questions in the array
  },
  reducers: {
    startExamAction: (state, action) => {
      // following function updates the queue and answers array with the questions and answers
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers,
      };
    },

    // following function updates the trace value for the index of the questions in array
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },

    movePrevAction: (state) => {
      // following function updates the trace value for the index of the questions in array
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      // following function resets the state to initial value
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;

export default questionReducer.reducer;
