import React from "react";
import Text from "../text/Text";
import "./Alert.css";

import { colorCode, colorCodeText } from "../../utils/colors/colorCode";
export default function Alert(props) {
  return (
    <div
      style={{
        backgroundColor: colorCode(props.type),
      }}
      className="nss-alert"
    >
      <Text
        type="p"
        value={props.value}
        style={{
          color: colorCodeText(props.type),
        }}
      />
    </div>
  );
}
