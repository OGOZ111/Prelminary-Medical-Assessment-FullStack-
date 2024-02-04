import { Router } from "express";
const router = Router();

// import controller
import * as controller from "../controllers/controller.js";

// Questions Routes API

// routing for questions and answers, API endpoints
router
  .route("/questions")
  .get(controller.getQuestions) // GET request
  .post(controller.insertQuestions) // POST request
  .delete(controller.dropQuestions); // DELETE request

router
  .route("/result")
  .get(controller.getResult) // GET request
  .post(controller.storeResult) // POST request
  .delete(controller.dropResult); // DELETE request

export default router;
