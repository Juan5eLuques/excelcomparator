import { useState } from "react";

export default function useMontoTotal() {
  const [suma, setSuma] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(suma);
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
          'La columna "Monto" no fue encontrada en la hoja especificada.'
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

      setSuma(total);
    };

    reader.readAsArrayBuffer(file);
  };

  return { suma, handleFileUpload };
}
