import React from "react";
import "./AppBar.css";
import Text from "../text/Text";

export default function AppBar({ title, onClick, children }) {
  return (
    <div className="nss-appbar">
      <div onClick={(e) => onClick(e)}>
        <Text type="h3" value={title} />
      </div>
      {children}
    </div>
  );
}
