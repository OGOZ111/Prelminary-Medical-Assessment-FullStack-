// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";

// combine reducers
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

// create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
