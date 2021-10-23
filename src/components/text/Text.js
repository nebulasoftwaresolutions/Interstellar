import React from "react";
import "./Text.css";

export default function Text({ type, value, style }) {
  const createEl = () => {
    return React.createElement(type, { style: { ...style } }, value);
  };
  return <div className="nss-text">{createEl()}</div>;
}
