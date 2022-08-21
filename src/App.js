import React from "react";

import { Synagogue } from "./components/Synagogue";

import "./App.css";

const App = () => {
  document.title = "Golem Marble Generator";
  return (
    <div className="holder">
      <div className="title">Golem Marble Generator</div>
      <Synagogue />
    </div>
  );
};

export default App;
