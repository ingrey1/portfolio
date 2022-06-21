import React from "react";

export default function TextboxFeedbackModel() {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "cyan",
        border: "2px solid black",
      }}
    >
      <p style={{ margin: "5px", textAlign: "center", color: "blue" }}>
        <b>Was This Page Helpful?</b>
      </p>
      <br />
      <span>
        <button style={{ margin: "10px", color: "blue" }}>Positive</button>
        <button style={{ margin: "10px", color: "blue" }}>Negative</button>
        <button style={{ margin: "10px", color: "blue" }}>Neutral</button>
      </span>
    </div>
  );
}
