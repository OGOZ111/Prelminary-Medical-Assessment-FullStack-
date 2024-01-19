import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions

export async function insertQuestions(req, res) {
  try {
    const data = await Questions.insertMany({
      questions: questions,
      answers: answers,
    });
    res.json({ msg: "Data Saved Successfully...!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete all question

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// get all results
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

// post all results

// post all results
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved, dob, email, gender } =
      req.body;

    if (!username || !result) {
      throw new Error("Incomplete data provided...!");
    }

    const data = await Results.create({
      username,
      result,
      attempts,
      points,
      achieved,
      dob,
      email,
      gender,
    });

    res.json({ msg: "Result Saved Successfully...!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// delete all results

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
