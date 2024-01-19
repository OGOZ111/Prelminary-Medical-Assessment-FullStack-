import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import components
import { MainMenu } from "./MainMenu";
import Quiz from "./Quiz";
import { Result } from "./Result";
import { CheckUserExist } from "../helper/helper";
import { Leaderboard } from "./Leaderboard";

//React Routes. Protected routes are wrapped with CheckUserExist component
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu></MainMenu>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
