import React, { useState } from "react";

// eslint-disable-next-line
export default function (props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text", "success");
  };
  const handleCopyClick = () => {
    var copiedText = document.getElementById("myBox");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    props.showAlert("Text Copied", "success");
  };
  const handleExtraSpaces = () => {
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  return (
    <>
      <div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1 className="my-4">{props.heading}</h1>
          <textarea
            className="form-control my-2"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#3b3b44" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container">
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Conver to Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            Conver to LowerCase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h2>Your text summary</h2>
          <p>
            {text.trim() === ""
              ? "0"
              : `${text.trim().split(/\s+/).length} words`}{" "}
            and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
