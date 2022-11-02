import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import { Register } from "./components/Register";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    

  );
}

export default App;