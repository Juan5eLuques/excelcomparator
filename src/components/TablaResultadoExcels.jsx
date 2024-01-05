import React from "react";

export const TablaResultadoExcels = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto">
        <table className="w-96 bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">DNI</th>
              <th className="py-3 px-4 text-left">IMPORTE</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {data.map((item, index) => (
              <tr className=" border-blue-gray-200" key={index}>
                <td className="py-3 px-4">{index}</td>
                <td className="py-3 px-4">{item.Documento}</td>
                <td className="py-3 px-4">$ {item.Importe.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
