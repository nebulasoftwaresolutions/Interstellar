import React from "react";
import "./Select.css";

export default function Select({
  list,
  selected = "",
  label,
  onChange,
  value,
}) {
  return (
    <div className="nss-select">
      {!!label && <label>{label}</label>}
      <select
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {!!list &&
          list.map(({ label }, index) => <option key={index}>{label}</option>)}
      </select>
    </div>
  );
}
