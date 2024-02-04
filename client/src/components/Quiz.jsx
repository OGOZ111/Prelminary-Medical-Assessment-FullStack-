import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { BeatLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [loading, setLoading] = useState(false);
  const [check, setChecked] = useState(undefined); //
  const [disableButton, setDisableButton] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);
  const [hideQuestion, setHideQuestion] = useState(false);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onNext() {
    if (trace < queue.length) {
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }

      if (trace === queue.length - 1) {
        setDisableButton(true);
        setDisableOptions(true);
        setLoading(true);
        setHideQuestion(true);

        setTimeout(() => {
          setLoading(false);
          setHideQuestion(false);
          dispatch(MoveNextQuestion());
        }, 6000);
      } else {
        dispatch(MoveNextQuestion());
      }
    }

    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    if (!disableOptions) {
      setChecked(check);
    }
  }

  if (result.length && result.length >= queue.length && !loading) {
    return <Navigate to={"/result"} replace={true} />;
  }

  return (
    <div className="container">
      <h1 className="title text-light">
        Question {trace + 1} of {queue.length}
      </h1>
      {loading && (
        <div className="res-loading">
          <BeatLoader color="#ffffff" loading={loading} />
          <p className="text-loading">Analyzing Results...</p>
        </div>
      )}

      {!hideQuestion && (
        <Questions onChecked={onChecked} disabled={disableOptions} />
      )}

      <div className="grid">
        {trace > 0 ? (
          <button
            className="btn prev"
            onClick={onPrev}
            disabled={disableButton}
          >
            Prev
          </button>
        ) : (
          <div></div>
        )}

        {!hideQuestion && (
          <button
            className="btn next"
            onClick={onNext}
            disabled={disableButton}
          >
            {trace === queue.length - 1 ? "Complete" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
