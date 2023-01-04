import React from "react";

export default function (props) {
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="5" />
      </div>
      <button className="btn btn-primary">Conver to Uppercase</button>
    </>
  );
}
