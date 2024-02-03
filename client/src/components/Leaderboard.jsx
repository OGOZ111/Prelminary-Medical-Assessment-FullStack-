import React from "react";
import { Link } from "react-router-dom";
import "../styles/Leadboard.css";

// Leaderboard component that displays table of results from the database
export const Leaderboard = () => {
  return (
    <div>
      <div className="container">
        <p className="disclaimer-text">
          Disclaimer: This application is a simulation and is provided for my
          software development display project ONLY. It is not intended to
          replace professional medical advice, diagnosis, or treatment. Always
          seek the advice of your physician or other qualified health provider
          with any questions you may have regarding a medical condition. Never
          disregard professional medical advice or delay in seeking it because
          of something you have read or simulated in this application. Always do
          your own research and consult with your doctor before making any
          medical decisions.
        </p>
        <Link className="btn" to={"/"}>
          Return to Menu
        </Link>
      </div>
    </div>
  );
};
