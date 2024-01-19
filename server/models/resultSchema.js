import mongoose from "mongoose";
const { Schema } = mongoose;

/** result model */
const resultModel = new Schema({
  username: { type: String, required: true },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" },
  dob: { type: Date, default: "", required: false },
  email: { type: String, default: "", required: false },
  gender: { type: String, default: "", required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("result", resultModel);
