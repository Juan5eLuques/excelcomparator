import React, { useState } from "react";
import * as XLSX from "xlsx";
import "../App.css";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ContadorExcel = () => {
  const [suma, setSuma] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const dataJson = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const columnaMontoIndex = dataJson[0].indexOf("Crédito");

      if (columnaMontoIndex === -1) {
        setSuma(
          'La columna "Crédito" no fue encontrada en la hoja especificada.'
        );
        return;
      }

      let total = 0;

      for (let i = 1; i < dataJson.length; i++) {
        const valor = parseFloat(dataJson[i][columnaMontoIndex]);

        if (!isNaN(valor)) {
          total += valor;
        }
      }

      setSuma(formatNumber(total));
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex-col">
      <h1>Contador de monto</h1>
      <div>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div>{suma ? <h2>$ {suma}</h2> : <></>}</div>
    </div>
  );
};
