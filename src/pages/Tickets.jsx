import React, { useState } from "react";
import { Ticket } from "../components/Ticket";

export const Tickets = () => {
  const TICKETS = [
    { id: 1, cliente: "Carlos", fecha: "05/10/2023", monto: 20000 },
    { id: 2, cliente: "Juan", fecha: "05/10/2023", monto: 10000 },
    { id: 3, cliente: "Pedro", fecha: "05/10/2023", monto: 220000 },
    { id: 4, cliente: "Pablo", fecha: "05/10/2023", monto: 23000 },
    { id: 5, cliente: "Elias", fecha: "05/10/2023", monto: 50000 },
  ];

  const [tickets, setTickets] = useState(TICKETS);

  return (
    <div className="flex flex-col w-full h-full">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          cliente={ticket.cliente}
          fecha={ticket.fecha}
          monto={ticket.monto}
        />
      ))}
    </div>
  );
};
