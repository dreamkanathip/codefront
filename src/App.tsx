/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Body";
import ShowRecord from "./pages/ShowRecord";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/recordappointment" element={<ShowRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
