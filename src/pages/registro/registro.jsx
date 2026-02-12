import { BriefcaseMedical, Lock, Mail, Phone, User, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registro() {
  const [ formulario, setFormulario ] = useState({
    nombre: "",
    telefono: "",
    rol: "paciente",
    especialidad: "",
    email: "",
    contraseña: "",
  });

  const actualizarDatos = (evento) => {
    evento.preventDefault()
    setFormulario({...formulario, [evento.target.name]:evento.target.value})
  }

  const enviarFormulario = async (evento) => {
    evento.preventDefault()
    console.log(formulario)
  }

  return (
    <>
      <section className="w-full min-h-screen p-6">
        <div className="w-100 h-110 p-5 bg-[#A2AF9B] m-auto mt-30 rounded-lg">
          <h1 className="text-white text-4xl text-center">Registrarse</h1>
          <h2 className="text-white text-xl text-center">
            Por favor registrarse para continuar
          </h2>
          <form onSubmit={enviarFormulario} className="w-full">
            <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center">
              <User className="w-10 text-center" size={20} />
              <input
                className="w-full bg-gray-200 focus:bg-white outline-none border-none  p-1 rounded-e-lg text-sm"
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={actualizarDatos}
                required
              />
            </div>

            <div className="flex w-full mb-3  bg-white rounded-lg border border-gray-300 items-center">
              <Phone className="w-10 text-center" size={20} />
              <input
                className="w-full  bg-gray-200 focus:bg-white outline-none border-none p-1 rounded text-sm"
                type="number"
                name="telefono"
                placeholder="Numero de telefono"
                onChange={actualizarDatos}
                required
              />
            </div>

            <div className="flex w-full mb-3  bg-white rounded-lg border border-gray-300 items-center">
              <Users className="w-10 text-center" size={20} />
              <select
                className="w-full  bg-gray-200 focus:bg-white outline-none border-none p-1 rounded text-sm"
                name="rol"
                onChange={actualizarDatos}
              >
                <option value="paciente">Paciente</option>
                <option value="doctor">Doctor/a</option>

              </select>
            </div>
            {formulario.rol === "doctor" && (
              <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                <BriefcaseMedical className="w-10 text-center" size={20} />
                <select
                  className="w-full  bg-gray-200 focus:bg-white outline-none border-none  p-1 rounded text-sm"
                  name="especialidad"
                  onChange={actualizarDatos}
                >
                  <option value="cardiologia">Cardiologia</option>
                  <option value="clinico">Clinico</option>
                  <option value="pediatria">Pediatria</option>
                  <option value="traumatologia">Traumatologia</option>
                  <option value="dermatologia">Dermatologia</option>
                  <option value="oftalmologia">Oftalmologia</option>
                </select>
              </div>
            )}

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
                name="contraseña"
                placeholder="Contraseña"
                onChange={actualizarDatos}
                required
              />
            </div>

            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="text-white text-xl bg-orange-200 rounded-4xl p-2 "
              >
                <h1>Registrarse</h1>
              </button>
            </div>
          </form>
          <h2 className="text-white text-center text-xl">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/iniciar-sesion">iniciar sesion</Link>
          </h2>
        </div>
      </section>
    </>
  );
}

export default Registro;
