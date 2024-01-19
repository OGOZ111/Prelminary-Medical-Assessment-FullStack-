import mongoose from "mongoose";
const { Schema } = mongoose;

/** result model */
const resultModel = new Schema({
  username: { type: String, required: true },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" },
  //name: { type: String, required: true }, // Add name property
  //dob: { type: Date, required: true }, // Add date of birth property
  //email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("result", resultModel);
