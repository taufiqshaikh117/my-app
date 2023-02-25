import React, { useState } from "react";

export default function TextFile(props) {
  const [text, setText] = useState("Enter Your Text Here");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    setText("");
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onCopyText = () => {
    let text = document.getElementById("my-textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const onRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };



  return (
    <div className="container"  >
      <div>
        <h1 className={`text-${props.mode==='dark' ? "light" : "dark"}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-textarea"
            value={text}
            onChange={onTextChange}
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark' ? "light" : "dark"} mx-1`}
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark' ? "light" : "dark"} mx-1`}
          onClick={handleLowerClick}
        >
          Lowercase
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark' ? "light" : "dark"} mx-1`}
          onClick={handleClearClick}
        >
          Clear All
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark' ? "light" : "dark"} mx-1`}
          onClick={onCopyText}
        >
          Copy Text
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark' ? "light" : "dark"} mx-1`}
          onClick={onRemoveSpace}
        >
          Remove Space
        </button>
      </div>
      <div className="container my-3">
        <h1 className={`text-${props.mode==='dark' ? "light" : "dark"}`}>Words And Charaters Count:</h1>
        <p className={`text-${props.mode==='dark' ? "light" : "dark"}`}>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p className={`text-${props.mode==='dark' ? "light" : "dark"}`}>{0.008 * text.split(" ").length} Minutes</p>
        <h2 className={`text-${props.mode==='dark' ? "light" : "dark"}`}>Preview</h2>
        <p className={`text-${props.mode==='dark' ? "light" : "dark"}`}>{text}</p>
      </div>
    </div>
  );
}
