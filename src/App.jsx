import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Registro from "./pages/registro/registro";
import IniciarSesion from "./pages/iniciarSesion/iniciarSesion";
import Paciente from "./pages/paciente/paciente";
import Doctor from "./pages/doctor/doctor";
import Admin from "./pages/admin/admin";
import { useContext, useEffect } from "react";
import { Context } from "./context/context";

function App() {
  const direccionActual = useLocation().pathname;
  const rutasSinNav = ["/paciente", "/doctor", "/admin"];
  const mostrarNavYFoot = !rutasSinNav.includes(direccionActual);
  const { setUsuario, setRol, rol } = useContext(Context);

  useEffect(() => {
    const dataDelUsuario = localStorage.getItem("data_usuario");
    if (dataDelUsuario) {
      const dataTransformada = JSON.parse(dataDelUsuario);
      setUsuario(dataTransformada.user);
      setRol(dataTransformada.user.rol);
    } else {
      setUsuario(null);
      setRol(null);
    }
  }, [setUsuario, setRol]);

  return (
    <>
      <section className="bg-orange-50 min-h-screen">
        {mostrarNavYFoot && <Navbar></Navbar>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route
            path="/paciente"
            element={rol == "paciente" ? <Paciente /> : null}
          />
          <Route path="/doctor" element={rol == "doctor" ? <Doctor /> : null} />
          <Route path="/admin" element={rol == "admin" ? <Admin /> : null} />
        </Routes>

        {mostrarNavYFoot && <Footer></Footer>}
      </section>
    </>
  );
}

export default App;
