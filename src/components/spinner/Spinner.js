import React from "react";
import "./Spinner.css";

export default function Spinner({ show }) {
  return (
    <>
      {!!show && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
