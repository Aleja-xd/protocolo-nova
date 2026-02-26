// TAREA: Construir un Layout de 12 columnas
// Col-span-5 para el Formulario | Col-span-7 para el Scanner
// Snippet de page prc 

import Formulario from "@/components/Formulario";
import Scanner from "@/components/Scanner";
import LogRegistro from "@/components/LogRegistro";
import { LogRegistro as LogType } from "@/app/types/mission";

export default function MonitoreoPage() {
    return (
    <div className="p-8">
    <h1 className="text-5xl font-mono text-emerald-500 mb-8">MONITOREO</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-5">
                <Formulario />
                <LogRegistro logs={[]} />
            </div>
            <div className="col-span-1 md:col-span-7">
                <Scanner />
            </div>
        </div>
    </div>
  );
}