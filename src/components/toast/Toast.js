import React from "react";
import Text from "../text/Text";
import "./Toast.css";
import { colorCode, colorCodeText } from "../../utils/colors/colorCode";
export default function Toast(props) {
  const color = colorCodeText(props.type);
  const getPosition = () => {
    const p = props.direction;
    if (p === "left") return { left: "20px" };
    if (p === "right") return { right: "20px" };
  };
  return (
    <>
      <div
        className="nss-toast"
        style={{
          top: props.show ? "20px" : "-200px",
          left: props.direction === "left" ? "20px" : "",
          right: props.direction === "right" ? "20px" : "",
        }}
      >
        <div
          className="nss-toast__header"
          style={{
            backgroundColor: colorCode(props.type),
          }}
        >
          <Text
            type="h4"
            value="Toast header here"
            style={{ color, ...getPosition() }}
          />
        </div>
        <div className="nss-toast__body">
          <Text type="p" value="Toast body goes here" />
        </div>
      </div>
    </>
  );
}
