import React from "react";

export const Ticket = ({ monto, fecha, cliente }) => {
  return (
    <div className="flex flex-row rounded-md bg-slate-400 w-screen justify-between p-3">
      <p>Nombre: {cliente}</p>
      <span>Fecha: {fecha}</span>
      <p>Monto: ${monto}</p>
    </div>
  );
};
