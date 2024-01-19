import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css";
import { useDispatch } from "react-redux";
import { setUserId, setEmail, setDOB } from "../redux/result_reducer";

export const MainMenu = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dobRef = useRef(null);

  const dispatch = useDispatch();

  // Checks if there is user input in the fields and dispatches the user id to the redux store
  function startQuiz() {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const dob = dobRef.current?.value;

    if (name && email && dob) {
      dispatch(setUserId(name));
      dispatch(setEmail(email));
      dispatch(setDOB(dob));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Preliminary Assessment</h1>

      <ol></ol>
      <form id="form">
        <input
          ref={nameRef}
          className="userid"
          type="text"
          placeholder="Enter your name"
        />
        <input
          ref={emailRef}
          className="userid"
          type="email"
          placeholder="Enter your email"
        />
        <input
          ref={dobRef}
          className="userid"
          type="date"
          placeholder="Enter your date of birth"
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
