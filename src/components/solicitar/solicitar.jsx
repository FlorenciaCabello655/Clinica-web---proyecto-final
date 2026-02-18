import { Form } from "lucide-react";
import { useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";

function Solicitar({setSeccion}) {
  const [formulario, setFormulario] = useState({
    medicoId: null,
    fecha: "",
    hora: "",
    motivo: "",
  });
  const hoy = new Date(); // dd/mm/yyyy Timezone hh:mm:ss
  const fechaActual = hoy.toISOString().split("T")[0]; // [ dd/mm/yyyy , hh:mm:ss]
  const horas = hoy.getHours().toString().padStart(2, "0"); // padStart asegura que horas de un digito tenga un cero delante = 2:57 => 02:57
  const minutos = hoy.getMinutes().toString().padStart(2, "0");
  const horaActual = `${horas}:${minutos}`; // formateado a hh:mm

  const actualizarDatos = (evento) => {
    evento.preventDefault();
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    let body = {
      ...formulario,
      fecha: `${formulario.fecha} ${formulario.hora}`, // => dd/mm/aaaa hh:mm, formateamos la fecha
    };
    delete body.hora;
    try {
      // Hacemos la consulta del registro al backend con POST, a la ruta especifica
      const respuestaBack = await axiosInstancia.post(
        "/api/turnos",
        body, // pasamos el body contruido
      );
      Swal.fire({
        // usamos sweetAlert, para mostrar la alerta
        icon: "success",
        title: respuestaBack.data.msg || `Turno solicitado correctamente.`, // mostramos el mensaje personalizado
        timer: 2000,
      });
      setSeccion("turnos");
    } catch (error) {
      Swal.fire({
        icon: "error", // mostramos el alert del error
        title: error.data.msg || "Error al solicitar turno.",
      });
    }
  };

  return (
    <>
      <section className="w-full min-h-screen p-6">
        <div className="w-130 p-5 bg-[#A2AF9B] m-auto rounded-lg">
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            SOLICITAR TURNOS
          </h1>
          <form onSubmit={enviarFormulario} className="w-full">
            <div>
              <label className="font-semibold text-white">DOCTOR/A</label>
              <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                <select
                  className="w-full  bg-gray-200 focus:bg-white outline-none border-none  p-1 rounded text-sm"
                  name="medicoId"
                  onChange={actualizarDatos}
                >
                  <option value={null} disabled selected>
                    Seleccione un doctor/a
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-white">FECHA</label>
                <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                  <input
                    className="w-full p-1 text-sm"
                    type="date"
                    name="fecha"
                    placeholder="fecha"
                    min={fechaActual}
                    onChange={actualizarDatos}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-white">HORA</label>
                <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                  <input
                    className="w-full p-1 text-sm"
                    type="time"
                    name="hora"
                    placeholder="hora"
                    min={horaActual}
                    onChange={actualizarDatos}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="font-semibold text-white">
                MOTIVO <span className="text-white text-xs">*opcional</span>
              </label>
              <div className="flex w-full mb-3 bg-white rounded-lg border border-gray-300 items-center ">
                <textarea
                  className="w-full p-1 text-sm h-50 resize-none overflow-y-hidden"
                  name="motivo"
                  placeholder="Describa sus sintomas"
                  onChange={actualizarDatos}
                  style={{ height: "8.5rem" }}
                ></textarea>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <button
                type="submit"
                className="px-2 py-1 w-full rounded-lg border bg-orange-100 hover:bg-orange-50 duration-200 cursor-pointer border-slate-100"
              >
                Solicitar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Solicitar;
