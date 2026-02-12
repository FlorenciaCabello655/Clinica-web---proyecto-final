import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Registro from "./pages/registro/registro";
import IniciarSesion from "./pages/iniciarSesion/iniciarSesion";
import Paciente from "./pages/paciente/paciente";

function App() {
  const [mostrarNavYFoot, setMostrarNavYFoot] = useState(true);
  const direccionActual = useLocation().pathname;

  useEffect(() => {
    if (
      direccionActual !== "/paciente" &&
      direccionActual !== "/doctor" &&
      direccionActual !== "/admin"
    ) {
      setMostrarNavYFoot(true);
    } else {
      setMostrarNavYFoot(false);
    }
  }, [direccionActual]);

  return (
    <>
      <section className="bg-orange-50 min-h-screen">
        {mostrarNavYFoot && <Navbar></Navbar>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/paciente" element={<Paciente />} />
        </Routes>

        {mostrarNavYFoot && <Footer></Footer>}
      </section>
    </>
  );
}

export default App;
