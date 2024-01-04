import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => (
  <header className="absolute top-0 m-2 left-0 right-0">
    <div className="flex items-center justify-between">
      <h3 className="text-3xl">Tickets</h3>
      <ul className="flex gap-2 ">
        <li className="flex">
          <button>
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
