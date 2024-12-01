import React from "react";
import RegexValidator from "./components/RegexValidatator";
import RegexValidator2 from "./components/RegexValidator2";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">Regex Validation App</h1>
      <div className="app-content">
        <div className="app-column">
          <RegexValidator />
        </div>
        <div className="app-column">
          <RegexValidator2 />
        </div>
      </div>
    </div>
  );
}

export default App;
