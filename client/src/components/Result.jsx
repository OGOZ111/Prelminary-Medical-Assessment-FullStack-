import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { ResultTable } from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
// import actions to reset values for restart game

import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attempts_Number } from "../helper/helper";
import { earnPoints_Number, flagResult } from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";

export const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  // All user result data, stored in variables for later

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  //added in new argue to getAchievementText, based on earnPoints value to determine text

  const getAchievementText = (earnPoints) => {
    if (earnPoints < 30) {
      return "Low";
    } else if (earnPoints < 50) {
      return "Medium";
    } else {
      return "High";
    }
  };

  // store user result

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achieved: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Assessment Complete</h1>

      <div className="result flex-center">
        <div className="flex">
          <p className="bold">
            Thank you {userId} for completing the assessment. Based on {""}
            {attempts} out of 8 questions you have answered, We have analyzed
            your case and determined it as {getAchievementText(earnPoints)}
          </p>
          <span>Username</span>
          <span className="bold">{userId || ""}</span>
        </div>
        <div className="flex">
          <span>Max possible points: </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions: </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Answered: </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Points:</span>
          <span className="bold">{getAchievementText(earnPoints)}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
    </div>
  );
};
