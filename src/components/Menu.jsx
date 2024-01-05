import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => (
  <header className=" top-0 p-4 left-0 right-0">
    <div className="flex items-center justify-between text-orange-800 text-lg">
      <h1 className="text-3xl">Tickets</h1>
      <ul className="flex gap-2 items-center">
        <li className="flex">
          <button className="border p-2 rounded-2xl hover:bg-black transition-all duration-500 ">
            <Link className="w-full h-full" to="/">
              Home
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/contador">Contador</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/tickets">Tickets</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/estadisticas">Estadisticas</Link>
          </button>
        </li>
      </ul>
    </div>
  </header>
);
