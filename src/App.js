import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [modeState, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (theme) => {
    setMode(theme);
    document.title = `TextUtils - ${theme} Mode`;
    document.body.className = theme;
    showAlert(`${theme} mode has been enabled`, "success");
  };

  return (
    <Router>
      <Navbar
        title="First React App"
        mode={modeState}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm heading="Log IN" showAlert={showAlert} mode={modeState} />
          }
        />
        <Route path="/about" element={<About mode={modeState} />} />
      </Routes>
    </Router>
  );
}

export default App;
