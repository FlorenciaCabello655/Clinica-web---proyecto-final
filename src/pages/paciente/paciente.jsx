import { ClipboardPlus, List } from "lucide-react";
import { useState } from "react";
import Turnos from "../../components/turnos/turnos";
import Solicitar from "../../components/solicitar/solicitar";

function paciente() {
  const [seccion, setSeccion] = useState("turnos");

  return (
    <>
      <section className="relative w-full">
        <nav className="fixed top-0 w-full h-20 bg-orange-100"></nav>
        <sidebar className="fixed pt-20 px-5 start-0 top-0 bg-[#A2AF9B] h-screen w-[18%] flex flex-col">
          <button
            className="flex items-center text-slate-200 hover:text-slate-50 mb-2 cursor-pointer"
            onClick={() => setSeccion("turnos")}
          >
            <List /> Turnos
          </button>
          <button
            className="flex items-center text-slate-200 hover:text-slate-50 cursor-pointer"
            onClick={() => setSeccion("solicitar")}
          >
            <ClipboardPlus /> Solicitar turnos
          </button>
        </sidebar>
        <div className="fixed bottom-0 top-20 end-0 start-[18%] overflow-y-auto p-5">
          {seccion === "turnos" ? (
            <Turnos/>
          ) : seccion == "solicitar" ? (
            <Solicitar/>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default paciente;
