import { Lock, Mail } from "lucide-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";
import { Context } from "../../context/context";

function IniciarSesion() {
  const [iniciarSesionForm, setiniciarSesionForm] = useState({
    email: "",
    password: "",
  });

  const { setUsuario, setRol, setLoading } = useContext(Context);
  const navigate = useNavigate();

  const actualizarDatos = (evento) => {
    evento.preventDefault();
    setiniciarSesionForm({
      ...iniciarSesionForm,
      [evento.target.name]: evento.target.value,
    });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    setLoading(true);
    try {
      // Hacemos la consulta del registro al backend con POST, a la ruta especifica
      const respuestaBack = await axiosInstancia.post(
        "/api/auth/login",
        iniciarSesionForm,
      );
      Swal.fire({
        // usamos sweetAlert, para mostrar la alerta
        icon: "success",
        title: `Bienvenido ${respuestaBack.data.user.nombre}`, // mostramos el mensaje personalizado
        timer: 2000,
      });
      localStorage.setItem("data_usuario", JSON.stringify(respuestaBack.data)); // {data} en data viene lo que manda el backend
      setUsuario(respuestaBack.data.user); // guardamos en el context los datos del usuario y el rol
      setRol(respuestaBack.data.user.rol);
      setLoading(false);
      redireccionarPanel(respuestaBack.data.user.rol); // redireccionamos al panel dependiendo el caso del rol
    } catch (error) {
      Swal.fire({
        icon: "error", // mostramos el alert del error
        title: error.response.data.msg || "Error al iniciar sesión.",
        timer: 2500,
      });
      setLoading(false);
    }
  };

  const redireccionarPanel = (rol) => {
    if (rol == "medico") {
      navigate("/doctor");
    } else if (rol == "paciente") {
      navigate("/paciente");
    } else {
      navigate("/admin");
    }
  };

  return (
    <section className="w-full min-h-screen p-6">
      <div className="w-100 h-110 p-5 bg-[#A2AF9B] m-auto mt-30 rounded-lg">
        <h1 className="text-white text-4xl text-center">Iniciar sesion</h1>
        <h2 className="text-white text-xl text-center">
          Iniciar sesion para continuar
        </h2>
        <form onSubmit={enviarFormulario} className="w-full">
          <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
            <Mail className="w-10 text-center" size={20} />
            <input
              className="w-full  bg-gray-200 focus:bg-white outline-none border-none  p-1 rounded text-sm"
              type="email"
              name="email"
              placeholder="email"
              onChange={actualizarDatos}
              required
            />
          </div>

          <div className="flex w-full mb-3  bg-white rounded-lg border border-gray-300 items-center">
            <Lock className="w-10 text-center" size={20} />
            <input
              className="w-full  bg-gray-200 focus:bg-white outline-none border-none p-1 rounded text-sm"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={actualizarDatos}
              required
            />
          </div>

          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="text-white text-xl bg-orange-200 rounded-4xl p-2 cursor-pointer"
            >
              <h1>Iniciar sesion</h1>
            </button>
          </div>
        </form>

        <h2 className="text-white text-center text-xl">
          ¿No tienes una cuenta? <Link to="/registro">registrate</Link>
        </h2>
      </div>
    </section>
  );
}

export default IniciarSesion;
