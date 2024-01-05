import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContadorExcel } from "./pages/ContadorExcel";
import { Menu } from "./components/Menu";
import { Tickets } from "./pages/Tickets";
import { Estadisticas } from "./pages/Estadisticas";

function App() {
  return (
    <div className="bg-slate-800 w-screen h-screen">
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<ContadorExcel />} />
          <Route path="/tickets" element={<Tickets />}></Route>
          <Route path="/estadisticas" element={<Estadisticas />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
