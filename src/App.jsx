import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContadorExcel } from "./pages/ContadorExcel";
import { Menu } from "./components/Menu";
import { Tickets } from "./pages/Tickets";
import { Estadisticas } from "./pages/Estadisticas";

function App() {
  return (
    <div className="flex w-full h-full">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<ContadorExcel />} />
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/estadisticas" element={<Estadisticas />}></Route>
      </Routes>
    </div>
  );
}
export default App;
