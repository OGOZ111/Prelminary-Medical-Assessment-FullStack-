import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import actions to reset values for restart

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
      return "Your reported symptoms are on the lower side. Excellent! We're here to support your health journey. If you have any concerns, feel free to discuss them during your appointment.";
    } else if (earnPoints < 50) {
      return "Thank you for providing detailed information. Your medium symptoms have been documented, and we're ready to assist you further during your appointment. Your well-being matters to us.";
    } else {
      return "Thank you for providing detailed information about your symptoms. Your high symptoms have been noted, and our team is dedicated to working with you to ensure your health needs are met";
    }
  };

  // store user result

  usePublishResult({
    result,
    username: userId,
    email: useSelector((state) => state.result.email),
    dob: useSelector((state) => state.result.dob),
    gender: useSelector((state) => state.result.gender),
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
          <p className="disclaimer-text">
            Thank you {userId} for completing the assessment. Based on {""}
            {attempts} out of 8 questions you have answered, We have analyzed
            your results based on the information provided.{" "}
            {getAchievementText(earnPoints)}. Your information has been logged
            securely. We're ready for your appointment!
          </p>
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
