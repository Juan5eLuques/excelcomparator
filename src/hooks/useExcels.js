import { useState } from "react";
import * as XLSX from "xlsx";

export const useExcels = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [result, setResult] = useState([]);

  const handleFile1Upload = (e) => {
    const file = e.target.files[0];
    setFile1(file);
  };

  const handleFile2Upload = (e) => {
    const file = e.target.files[0];
    setFile2(file);
  };

  const compareExcels = async () => {
    if (file1 && file2) {
      const readFile = async (file) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        return new Promise((resolve) => {
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            resolve(jsonData);
          };
        });
      };

      const data1 = await readFile(file1);
      const data2 = await readFile(file2);

      const matchedRecords = [];

      data1.forEach((record1) => {
        const matchingRecords = data2.filter(
          (record2) =>
            record1.NroDocumento === record2.Documento &&
            record1.Importe === record2.Importe
        );

        const allRecordsMatch =
          matchingRecords.length ===
          data1.filter(
            (r) =>
              r.NroDocumento === record1.NroDocumento &&
              r.Importe === record1.Importe
          ).length;

        if (allRecordsMatch) {
          matchedRecords.push(...matchingRecords);
        }
      });

      setResult(matchedRecords);
    } else {
      // Manejar caso donde los archivos no están seleccionados
    }
  };

  const handleExportClick = () => {
    exportarAExcel(result, "Comparacion");
  };

  function exportarAExcel(result, nombreArchivo) {
    nombreArchivo = "Comparacion";
    const ws = XLSX.utils.json_to_sheet(result);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${nombreArchivo}.xlsx`);
  }

  return {
    result,
    handleFile1Upload,
    handleFile2Upload,
    compareExcels,
    handleExportClick,
  };
};
