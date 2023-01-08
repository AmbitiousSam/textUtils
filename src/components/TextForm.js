import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    console.log("Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="5"
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Conver to Uppercase
      </button>
    </>
  );
}
