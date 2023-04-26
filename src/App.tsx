import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/app.css";
import CounterContainer from "./components/CounterContainer";
import ToDoListContainer from "./components/ToDoListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/count" element={<CounterContainer />}/>
          <Route path="/todolist" element={<ToDoListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
