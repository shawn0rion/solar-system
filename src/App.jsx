import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planet from "./components/Planet.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={`/:name`} element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
  // browser router
  // routes
  // dynamic route for id of planet
}

export default App;
