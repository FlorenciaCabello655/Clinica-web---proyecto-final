import { useState } from "react";
import { Context } from "./context";

function AppContext({ children }) {
  const [usuario, setUsuario] = useState(null); // un useState para los datos de los usuarios
  const [rol, setRol] = useState(null);

  const valor = {
    usuario,
    setUsuario,
    rol,
    setRol,
  };

  return <Context.Provider value={valor}>{children}</Context.Provider>;
}

export default AppContext;
