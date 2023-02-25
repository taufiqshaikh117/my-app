import "./App.css";
import Navbar from "./components/Navbar";
import TextFile from "./components/TextFile";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setalert(null);
    }, 5000);
  };

  let toggleMode = () => {
    let mod = darkMode === "light" ? "dark" : "light";
    if (mod === "dark") {
      document.body.style.backgroundColor = "black";
      showAlert("Dark is Enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Light is Enabled", "success");
    }
    setdarkMode(mod);
  };
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} onModeChange={toggleMode} />
      <Alert alert={alert} />
      <TextFile
        heading="Enter Your Text:"
        showalert={showAlert}
        mode={darkMode}
      />
      {/* <Router>
        <Routes>
          <Route exact path="/about" element={<About mode={darkMode} />}>
          </Route>
          <Route exact path="/" element={<TextFile heading="Enter Your Text:" showalert={showAlert} mode={darkMode} />}>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
