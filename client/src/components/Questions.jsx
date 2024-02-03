// Questions.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
// Custom hooks
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked, disabled }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    if (!disabled) {
      onChecked(i);
      setChecked(i);
      dispatch(updateResult({ trace, checked: i }));
    }
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return (
      <h3 className="text-light">{serverError.message || "Unknown Error"}</h3>
    );

  return (
    <Grow in={true} direction="left" timeout={1000}>
      <div className="questions">
        <Zoom in={true} timeout={500}>
          <h2 className="text-light">{questions?.question}</h2>
        </Zoom>

        <ul key={questions?.id}>
          {questions?.options.map((q, i) => (
            <Grow key={i} in={true} timeout={1000 + i * 500}>
              <li>
                <input
                  type="radio"
                  value={false}
                  name="options"
                  id={`q${i}-option`}
                  onChange={() => onSelect(i)}
                  disabled={disabled}
                />
                <label className="text-primary" htmlFor={`q${i}-option`}>
                  {q}
                </label>
                <div
                  className={`check ${result[trace] === i ? "checked" : ""}`}
                ></div>
              </li>
            </Grow>
          ))}
        </ul>
      </div>
    </Grow>
  );
}
