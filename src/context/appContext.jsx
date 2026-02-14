import { createContext, useState } from "react";

export const Context = createContext();

function AppContext({ children }) {
const [usuario, setUsuario] = useState(null)
const [rol, setRol] = useState(null) // puede ser admin, doctor o paciente

const valor ={
    usuario,
    setUsuario,
    rol,
    setRol,
}

  return <Context.Provider valor={valor}>{children}</Context.Provider>;
}

export default AppContext;
