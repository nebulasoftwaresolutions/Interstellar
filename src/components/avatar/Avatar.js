import React from "react";
import Text from "../text/Text";
import "./Avatar.css";

import { colorCode, colorCodeText } from "../../utils/colors/colorCode";

export default function Avatar(props) {
  const isUsingPhoto = props.type === "image";
  return (
    <div
      className="nss-avatar"
      style={{
        backgroundColor: !isUsingPhoto && colorCode(props.theme),
        color: colorCodeText(props.theme),
        backgroundImage: !!props.theme && props.value,
      }}
      {...props}
    >
      {!isUsingPhoto ? (
        <Text type="h3" value={props.value} />
      ) : (
        <img src={props.value} alt="user" />
      )}
    </div>
  );
}
