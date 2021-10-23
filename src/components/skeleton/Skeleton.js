import React from "react";
import "./Skeleton.css";

export default function Skeleton(props) {
  const displaySkeleton = (props) => {
    if (props.type === "text") {
      return <span className="nss-skeleton__text"></span>;
    }
    if (props.type === "image") {
      return <span className="nss-skeleton__image"></span>;
    }
    if (props.type === "avatar") {
      return <span className="nss-skeleton__avatar"></span>;
    }
  };
  return <div className="nss-skeleton">{displaySkeleton(props)}</div>;
}
