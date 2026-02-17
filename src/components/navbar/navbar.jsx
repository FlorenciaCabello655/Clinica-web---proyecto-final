import { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { Context } from "../../context/context";

function Navbar() {
  const location = useLocation();
  const { usuario, rol } = useContext(Context);

  const navigate = useNavigate();

  const redireccionarPanel = () => {
    if (rol == "medico") {
      navigate("/doctor");
    } else if (rol == "paciente") {
      navigate("/paciente");
    } else {
      navigate("/admin");
    }
  };

  return (
    <nav className="w-full h-25 bg-orange-100 flex justify-between items-center px-4">
      <div>
        <img src={logo} alt="imagen de clinica" className="w-80" />
      </div>

      <div>
        <Link
          className={`me-5 font-semibold duration-200 ${
            location.pathname === "/"
              ? "text-zinc-800"
              : "text-zinc-500 hover:text-zinc-800"
          }`}
          to="/"
        >
          Inicio
        </Link>
        {!usuario ? (
          <>
            <Link
              className={`me-5 font-semibold duration-200 ${
                location.pathname === "/registro"
                  ? "text-zinc-800"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
              to="/registro"
            >
              Registrarse
            </Link>
            <Link
              className={`p-2 rounded-full font-bold text-white duration-200 ${
                location.pathname === "/iniciarSesion"
                  ? "bg-orange-400"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              to="/iniciarSesion"
            >
              Iniciar sesión
            </Link>
          </>
        ) : (
          <button
            className={`p-2 rounded-full font-bold text-white duration-200 bg-orange-200 hover:bg-orange-300`}
            onClick={() => redireccionarPanel()}
          >
            Ir al panel
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
