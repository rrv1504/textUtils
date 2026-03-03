import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const themes = {
    light: {
      bg: "linear-gradient(135deg, #ffffff, #f1f3f5)",
      text: "#212529",
      input: "#ffffff",
      button: "linear-gradient(45deg, #0d6efd, #3a86ff)",
    },
    dark: {
      bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      text: "#ffffff",
      input: "#1e1e1e",
      button: "linear-gradient(45deg, #434343, #000000)",
    },
    pink: {
      bg: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      text: "#ffffff",
      input: "#c9184a",
      button: "linear-gradient(45deg, #800f4f, #590d3d)",
    },
    blue: {
      bg: "linear-gradient(135deg, #1e3c72, #2a5298)",
      text: "#ffffff",
      input: "#1d3557",
      button: "linear-gradient(45deg, #14213d, #1e3c72)",
    },
    green: {
      bg: "linear-gradient(135deg, #1d4350, #a43931)",
      text: "#ffffff",
      input: "#2d6a4f",
      button: "linear-gradient(45deg, #134e5e, #71b280)",
    },
  };

  const currentTheme = themes[props.mode];

  const handleUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "warning");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "info");
  };

  const handleSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed", "success");
  };

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking...", "primary");
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div
      style={{
        padding: "30px",
        background: currentTheme.bg,
        color: currentTheme.text,
        minHeight: "100vh",
        transition: "all 0.4s ease",
      }}
    >
      <h1 className="mb-4">{props.heading}</h1>

      <textarea
        value={text}
        className="form-control mb-3 custom-textarea"
        style={{
          backgroundColor: currentTheme.input,
          color: currentTheme.text,
          border:
            props.mode === "light"
              ? "1px solid #ccc"
              : "1px solid rgba(255,255,255,0.3)",
          borderRadius: "10px",
          padding: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
        placeholder="Enter text here"
        onChange={(e) => setText(e.target.value)}
      />

      {[
        { label: "Upper Case", action: handleUpper },
        { label: "Lower Case", action: handleLower },
        { label: "Clear Text", action: handleClear },
        { label: "Copy Text", action: handleCopy },
        { label: "Remove Spaces", action: handleSpaces },
        { label: "Speak", action: speak },
      ].map((btn, i) => (
        <button
          key={i}
          onClick={btn.action}
          className="btn me-2 my-1"
          style={{
            background: currentTheme.button,
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          {btn.label}
        </button>
      ))}

      <div className="mt-4">
        <h2>Your text summary</h2>
        <p>
          {wordCount} words , {text.replace(/\s/g, "").length} characters
        </p>
        <p>{(0.008 * wordCount).toFixed(3)} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </div>
  );
}
