import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <div className="nss-input">
      {!!props.label && <label>{props.label}</label>}
      <input {...props} />
    </div>
  );
}
