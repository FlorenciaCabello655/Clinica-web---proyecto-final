import { CircleUserRound, ClipboardPlus, List, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import Turnos from "../../components/turnos/turnos";
import Solicitar from "../../components/solicitar/solicitar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

function Paciente() {
  const [seccion, setSeccion] = useState("solicitar");
  const { usuario, rol, cerrarSesion } = useContext(Context);

  return (
    <>
      <section className="relative w-full">
        <nav className="fixed top-0 start-[18%] end-0 h-20 bg-orange-100 flex justify-between items-center px-5">
          <div className="me-3 flex items-center">
            <div className="bg-slate-200 me-1 rounded-full">
              <CircleUserRound size={25} className="text-gray-500" />
            </div>
            <span className="text-slate-600">
              {usuario.nombre} - ({rol})
            </span>
          </div>
          <Link
            className={`font-semibold bg-[#A2AF9B] hover:opacity-75 duration-200 rounded-lg px-2 py-1 text-white`}
            to="/"
          >
            Volver al inicio
          </Link>
        </nav>
        <sidebar className="fixed pt-2 px-5 start-0 top-0 bg-[#A2AF9B] h-screen w-[18%] flex flex-col">
          <div className="mb-4">
            <img src={logo} alt="imagen de clinica" className="w-60" />
          </div>
          <hr className="border-white mb-2" />
          <button
            className={`flex items-center hover:text-slate-50 mb-2 cursor-pointer font-bold text-lg ${seccion == "turnos" ? "text-white" : "text-slate-200"}`}
            onClick={() => setSeccion("turnos")}
          >
            <List size={20} className="w-10" /> Turnos
          </button>
          <button
            className={`flex items-center hover:text-slate-50 mb-2 cursor-pointer font-bold text-lg ${seccion == "solicitar" ? "text-white" : "text-slate-200"}`}
            onClick={() => setSeccion("solicitar")}
          >
            <ClipboardPlus size={20} className="w-10" /> Solicitar turnos
          </button>
          <button
            className={`flex items-center hover:text-slate-50 mb-2 cursor-pointer font-bold text-lg text-slate-200`}
            onClick={() => cerrarSesion()}
          >
            <LogOut size={20} className="w-10" /> Cerrar sesión
          </button>
        </sidebar>
        <div className="fixed bottom-0 top-20 end-0 start-[18%] overflow-y-auto p-5">
          {seccion === "turnos" ? (
            <Turnos />
          ) : seccion == "solicitar" ? (
            <Solicitar />
          ) : null}
        </div>
      </section>
    </>
  );
}

export default Paciente;
