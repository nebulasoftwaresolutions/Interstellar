import React from "react";
import Text from "../text/Text";
import Button from "../button/Button";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div
      className="nss-modal"
      style={{
        display: props.show ? "block" : "none",
      }}
    >
      <div className="nss-modal--box">
        <div className="nss-modal__header">
          <Text type="h2" value={props.header} />
        </div>
        <div className="nss-modal__body">{props.children}</div>

        <div className="nss-modal__footer">
          <Button onClick={props.onClose} variant="gray" title="Close" />
          <Button
            onClick={props.submit}
            title={props.successBtnText || "Submit"}
          />
        </div>
      </div>
    </div>
  );
}
