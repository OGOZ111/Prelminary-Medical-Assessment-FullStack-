import { createSlice } from "@reduxjs/toolkit";

// createSlice is a function that accepts an object with the following properties:

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    email: null,
    dob: null,
    gender: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDOB: (state, action) => {
      state.dob = action.payload;
    },

    setGender: (state, action) => {
      state.gender = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        email: null,
        dob: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  setEmail,
  setDOB,
  setGender,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultReducer.actions;

export default resultReducer.reducer;
