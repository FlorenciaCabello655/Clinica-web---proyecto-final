import { CircleUserRound, List, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import ListaUsuarios from "../../components/listaUsuarios/listaUsuarios";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Context } from "../../context/context";

function Admin() {
  const [seccion, setSeccion] = useState("listaUsuarios");
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
          <hr className=" border-white mb-2" />
          <button
            className={`flex items-center hover:text-slate-50 mb-3 cursor-pointer font-bold text-lg ${seccion == "turnos" ? "text-white" : "text-slate-200"}`}
            onClick={() => setSeccion("listaUsuarios")}
          >
            <List size={20} className="w-10" /> Usuarios
          </button>
          <button
            className={`flex items-center hover:text-slate-50 mb-2 cursor-pointer font-bold text-lg text-slate-200`}
            onClick={() => cerrarSesion()}
          >
            <LogOut size={20} className="w-10" /> Cerrar sesión
          </button>
        </sidebar>
        <div className="fixed bottom-0 top-20 end-0 start-[18%] overflow-y-auto p-5">
          {seccion === "listaUsuarios" ? <ListaUsuarios /> : null}
        </div>
      </section>
    </>
  );
}

export default Admin;
