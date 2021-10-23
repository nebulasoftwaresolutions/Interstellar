import React from "react";
import "./Table.css";

import { colorCode, colorCodeText } from "../../utils/colors/colorCode";

export default function Table(props) {
  const processRow = (row, columns) => {
    return columns.map((column, index) => (
      <td key={index}>{row[column.label.toLowerCase()]}</td>
    ));
  };
  return (
    <div className="nss-table">
      <table>
        <thead>
          <tr
            style={{
              backgroundColor: colorCode(props.type),
              color: colorCodeText(props.type),
            }}
          >
            {!!props.columns.length &&
              props.columns.map((column, index) => (
                <th key={index} {...column.attrs}>
                  {column.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, index) => (
            <tr key={index} {...row.attrs}>
              {processRow(row, props.columns)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
