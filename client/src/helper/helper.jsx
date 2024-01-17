import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

// function counts number of questions against results for each question answered
export function attempts_Number(result) {
  return result.filter((r) => r !== undefined).length;
}

// Function compares the answers and results and returns the number of correct answers
export function earnPoints_Number(result, answers, point) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
}
// function for simple math equation to multiple the number of correct answers by the point value
export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints; /** earn 50% marks */
}

// check user authentication, if user is not logged in then redirect to login page

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

// get server data from backend

/** get server data */
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

/** post server data */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
