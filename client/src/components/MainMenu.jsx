import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css";
import { useDispatch } from "react-redux";
import {
  setUserId,
  setEmail,
  setDOB,
  setGender,
} from "../redux/result_reducer";

// MainMenu: component to display the main menu and user input fields
export const MainMenu = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dobRef = useRef(null);
  const genderRef = useRef(null);

  const dispatch = useDispatch();

  // Checks if there is user input in the fields and dispatches the user id to the redux store
  function startQuiz() {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const dob = dobRef.current?.value;
    const gender = genderRef.current?.value;

    // If the user has entered a name, email, and date of birth, dispatch  to the redux store
    if (name && email && dob) {
      dispatch(setUserId(name));
      dispatch(setEmail(email));
      dispatch(setDOB(dob));
      dispatch(setGender(gender));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Preliminary Assessment</h1>

      <ol></ol>
      <form id="form">
        <div>
          <label className="main-labels">Name</label>
          <input
            id="name"
            ref={nameRef}
            className="userid"
            type="text"
            placeholder="Enter your name"
          />
          <span id="nameError" className="error"></span>
        </div>

        <div>
          <label className="main-labels">Email</label>
          <input
            id="email"
            ref={emailRef}
            className="userid"
            type="email"
            placeholder="Enter your email"
          />
          <span id="emailError" className="error"></span>
        </div>

        <div>
          <label className="main-labels">Date of Birth</label>
          <input
            id="dob"
            ref={dobRef}
            className="userid"
            type="date"
            placeholder="Enter your date of birth"
          />
          <span id="dobError" className="error"></span>
        </div>

        <div>
          <label className="main-labels">Gender</label>
          <select
            id="gender"
            ref={genderRef}
            className="userid"
            defaultValue=""
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer Not to Answer">Prefer Not to Answer</option>
          </select>
          <span id="genderError" className="error"></span>
        </div>
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
