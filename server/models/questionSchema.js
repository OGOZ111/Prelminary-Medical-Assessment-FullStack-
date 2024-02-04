import mongoose from "mongoose";

const { Schema } = mongoose;

// question model

const questionModel = new Schema({
  questions: { type: Array, default: [] }, // array of questions
  answers: { type: Array, default: [] }, // array of answers
  createdAt: { type: Date, default: Date.now }, // date created
});

export default mongoose.model("Question", questionModel);
