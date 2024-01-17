import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";

export const MainMenu = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  // Checks if there is user input in the name inut field and dispatches the user id to the redux store
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Finnish Trivia App</h1>

      <ol>
        <li>Total of 10 questions</li>
        <li>Every correct answer is worth 10 points</li>
        <li>
          Each question has multiple options. You can choose only one option.
        </li>
        <li>Questions begin easy, and get progressively more difficult</li>
        <li>
          You can return to any previous questions and change your answers
        </li>
        <li>
          At the end of the quiz, you'll receive a passed or failed result. Your
          username and score are logged to the Scoreboard
        </li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Enter username"
        />
      </form>

      <div className="start">
        <Link onClick={startQuiz} className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
      <div className="start">
        <Link className="btn" to={"leaderboard"}>
          Scoreboard
        </Link>
      </div>
    </div>
  );
};
