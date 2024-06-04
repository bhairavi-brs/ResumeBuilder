import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import { FormTest } from "./Testing/FormTest";
import { Details } from "./DetailsPage/Details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/form" element={Form} />
            <Route path="/" element={<FormTest/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
