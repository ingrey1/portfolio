import React from "react";

export default function TextboxFeedbackModel() {
  return (
    <div style={{ display: "inline-block", border: "2px solid black" }}>
      <textarea
        id="feedback"
        name="feedback"
        rows="10"
        cols="30"
        style={{ resize: "none", color: "blue", backgroundColor: "cyan" }}
      >
        ENTER FEEDBACK HERE
      </textarea>
      <br />
      <center>
        <button type="button" style={{ margin: "10px", color: "blue" }}>
          Submit Feedback
        </button>
      </center>
    </div>
  );
}
