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
      <h1 className="title text-light">Preliminary Assessment</h1>

      <ol></ol>
      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Enter your name"
        />
      </form>

      <div className="start">
        <Link onClick={startQuiz} className="btn" to={"quiz"}>
          Start
        </Link>
      </div>
      <div className="start">
        <Link className="btn" to={"leaderboard"}>
          Disclaimer
        </Link>
      </div>
    </div>
  );
};
