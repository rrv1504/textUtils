import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const themes = {
    light: {
      bg: "#f8f9fa",
      text: "#212529",
      input: "#ffffff",
      button: "#0d6efd",
    },
    dark: {
      bg: "#121212",
      text: "#ffffff",
      input: "#1e1e1e",
      button: "#343a40",
    },
    pink: {
      bg: "#a4135c",
      text: "#ffffff",
      input: "#800f4f",
      button: "#590d3d",
    },
    blue: {
      bg: "#14213d",
      text: "#ffffff",
      input: "#1d3557",
      button: "#16324f",
    },
    green: {
      bg: "#1b4332",
      text: "#ffffff",
      input: "#2d6a4f",
      button: "#1b4332",
    },
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Lowercase was clicked", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "info");
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed", "success");
  };

  const currentTheme = themes[props.mode];

  const handleOnClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Uppercase was clicked", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "warning");
  };

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Message spoken", "primary");
  };

  const showLength = (text) => {
    const words = text.trim() === "" ? [] : text.trim().split(/\s+/);
    const characters = text.replace(/\s/g, "");
    return `${words.length} words , ${characters.length} characters`;
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{props.heading}</h1>

      <textarea
        value={text}
        className="form-control mb-3"
        style={{
          backgroundColor: currentTheme.input,
          color: currentTheme.text,
          border: "1px solid rgba(255,255,255,0.2)",
        }}
        placeholder="Enter text here"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleOnClick}
        className="btn me-2"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Upper Case
      </button>

      <button
        onClick={handleLowercaseClick}
        className="btn me-2"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Lower Case
      </button>

      <button
        onClick={handleClearClick}
        className="btn me-2"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Clear Text
      </button>

      <button
        onClick={handleCopyClick}
        className="btn me-2"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Copy Text
      </button>

      <button
        onClick={handleRemoveExtraSpaces}
        className="btn me-2"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Remove Spaces
      </button>

      <button
        onClick={speak}
        className="btn"
        style={{
          backgroundColor: currentTheme.button,
          color: "#fff",
          border: "none",
        }}
      >
        Speak
      </button>

      <div className="mt-4">
        <h2>Your text summary</h2>
        <p>{showLength(text)}</p>
        <p>
          {(0.008 * text.trim().split(/\s+/).length).toFixed(3)} Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </div>
  );
}
