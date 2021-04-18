import React from "react";

import "./Button.css";

export const Button = ({ content, onButtonClick, type }) => {
  return (
    <div
      className={`Btn ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}>
      {content}
    </div>
  );
};


