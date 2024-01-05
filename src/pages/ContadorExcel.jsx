import React from "react";

import { useExcels } from "../hooks/useExcels";
import { TablaResultadoExcels } from "../components/TablaResultadoExcels";

export const ContadorExcel = () => {
  const {
    result,
    handleFile1Upload,
    handleFile2Upload,
    compareExcels,
    handleExportClick,
  } = useExcels();

  return (
    <div>
      <div className="flex mx-5 my-3 w-2/3">
        <div className="h-max w-max border flex-col flex p-3 rounded-lg text-center mx-5  text-white">
          <span className="p-2">Tickets Whatsapp</span>
          <input type="file" onChange={handleFile1Upload} />
        </div>
        <div className="h-max w-max border flex-col flex p-3 rounded-lg text-center mx-5  text-white">
          <span className="p-2">Tickets Banco</span>
          <input type="file" onChange={handleFile2Upload} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="h-auto" onClick={compareExcels}>
            Comparar Excels
          </button>
          <button className="h-auto" onClick={handleExportClick}>
            Exportar Excels
          </button>
          <button className="h-auto" onClick={compareExcels}>
            Comparar Excels
          </button>
          <button className="h-auto" onClick={handleExportClick}>
            Exportar Excels
          </button>
        </div>
      </div>

      {result.length > 0 && (
        <div>
          <h2>Registros coincidentes:</h2>
          <TablaResultadoExcels data={result}></TablaResultadoExcels>
        </div>
      )}
    </div>
  );
};
