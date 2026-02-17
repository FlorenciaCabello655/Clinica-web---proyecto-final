import { useState } from "react";
import { Context } from "./context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AppContext({ children }) {
  const [usuario, setUsuario] = useState(null); // un useState para los datos de los usuarios
  const [rol, setRol] = useState(null);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("data_usuario"); // eliminamos del localstorage
    Swal.fire({
      // usamos sweetAlert, para despedir
      icon: "success",
      title: `Hasta luego ${usuario.nombre}`, // mostramos el mensaje personalizado
      timer: 1500, // se cierra en 1500 milisegundos
    });
    setUsuario(null); // dejamos usuario y rol en null
    setRol(null);
    navigate("/"); // enviamos al home
  };

  const valor = {
    usuario,
    setUsuario,
    rol,
    setRol,
    cerrarSesion,
  };

  return <Context.Provider value={valor}>{children}</Context.Provider>;
}

export default AppContext;
