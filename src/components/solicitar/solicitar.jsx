import { Form } from "lucide-react";
import { useState } from "react";

function Solicitar() {
  const [formulario, setFormulario] = useState({
    doctor: "",
  });

  const actualizarDatos = (evento) => {
    evento.preventDefault();
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    console.log(formulario);
  };

  return (
    <>
      <section className="w-full min-h-screen p-6">
        <div className="w-130 h-110 p-5 bg-[#A2AF9B] m-auto mt-30 rounded-lg">
          <h1 className="text-white text-3xl text-center">Solicitar turnos</h1>
          <form onSubmit={enviarFormulario} className="w-full">
            <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
              <select
                className="w-full  bg-gray-200 focus:bg-white outline-none border-none  p-1 rounded text-sm"
                name="especialidad"
                onChange={actualizarDatos}
              >
                <option value="doctor">Doctor/a</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                <input className="w-full"
                  type="date"
                  name="fecha"
                  placeholder="fecha"
                  onChange={actualizarDatos}
                  required
                />
              </div>

              <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                <input className="w-full"
                  type="time"
                  name="hora"
                  placeholder="hora"
                  onChange={actualizarDatos}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Solicitar;
