import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

    const backgrounds = {
      light: "#ffffff",
      dark: "#101213",
      pink: "#a4135c",
      blue: "#0b3d91",
      green: "#023e17",
    };

    document.body.style.backgroundColor = backgrounds[theme];
    document.title = `TextUtils - ${theme} Mode`;
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
          exact path="/"
          element={
            <TextForm heading="Log IN" showAlert={showAlert} mode={modeState} />
          }
        />

        <Route exact path="/about" element={<About mode={modeState} />} />
      </Routes>
    </Router>
  );
}

export default App;
