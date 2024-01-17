import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { BeatLoader } from "react-spinners";

//redux store import

import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [loading, setLoading] = useState(false);
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  //Button event handler for next  button
  function onNext() {
    if (trace < queue.length) {
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }

      // Check if it's the last question
      if (trace === queue.length - 1) {
        setLoading(true); // Set loading to true before the delay

        // Simulate a delay with setTimeout
        setTimeout(() => {
          setLoading(false); // Set loading to false after the delay
          dispatch(MoveNextQuestion());
        }, 6000);
      } else {
        dispatch(MoveNextQuestion());
      }
    }

    setChecked(undefined);
  }

  // Button event handler for  prev buttons that returns to the previous question in the array.
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion()); // moves to the previous question in the array
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length && !loading) {
    return <Navigate to={"/result"} replace={true} />;
  }

  // Insert the trace value into the JSX to display the current question number, +1 bc index starts at 0
  return (
    <div className="container">
      <h1 className="title text-light">
        Question {trace + 1} of {queue.length}
      </h1>
      {loading && (
        <div className="res-loading">
          <BeatLoader color="#ffffff" loading={loading} />
          <p className="text-loading">Analyzing your symptoms...</p>
        </div>
      )}

      {/*display question*/}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button className="btn next" onClick={onNext}>
          {trace === queue.length - 1 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
}
