import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function iniciarSesion () {
    const [iniciarSesionForm, setiniciarSesionForm] = useState({
        email:"",
        contraseña:"",
    })
    const actualizarDatos = (evento) => {
        evento.preventDefault()
        setiniciarSesionForm({...iniciarSesionForm, [evento.target.name]: evento.target.value })
    }
    
    const enviarFormulario = async (evento) => {
        evento.preventDefault()
        console.log(iniciarSesionForm)
    }
    
    return(
        <section className="w-full min-h-screen p-6"  >
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
                    <h1>Iniciar sesion</h1>
                  </button>
                </div>
              </form>
    
               <h2 className="text-white text-center text-xl">
                ¿No tienes una cuenta?{" "}
                <Link to="/registro">registrate</Link>
              </h2>
            </div>
    
        </section>
    )
};



export default iniciarSesion;