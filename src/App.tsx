import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/app.css";

// redux
import CounterContainer from "./components/CounterContainer";
import ToDoListContainer from "./components/ToDoListContainer";
import Navbar from "./components/Navbar";

// mobx
import MobXCounterContainer from "./components/MobXCounterContainer";
import MobXToDoListContainer from "./components/MobXToDoListContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/count" element={<CounterContainer />}/>
          <Route path="/todolist" element={<ToDoListContainer />} />
          <Route path="/mobxcount" element={<MobXCounterContainer />} />
          <Route path="/mobxlist" element={<MobXToDoListContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
