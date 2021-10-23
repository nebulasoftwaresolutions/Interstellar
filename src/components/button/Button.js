import React from "react";
import "./Button.css";

export default function Button(props) {
  const colorCodeBtn = (color) => {
    switch (color) {
      case "blue":
        return "#4242da";
      case "black":
        return "#333";
      case "gray":
        return "#5C636A";
      case "green":
        return "#157347";
      case "red":
        return "#BB2D3B";
      case "yellow":
        return "#FFCA2C";
      case "white":
        return "#fff";
      default:
        return "#4242da";
    }
  };
  const colorCodeText = (color) => {
    if (color === "yellow" || color === "white") return "#000";
    else return "#fff";
  };
  return (
    <div className="nss-btn">
      <button
        style={{
          backgroundColor: colorCodeBtn(props.variant),
          color: colorCodeText(props.variant),
        }}
        {...props}
      >
        {props.title}
      </button>
    </div>
  );
}
