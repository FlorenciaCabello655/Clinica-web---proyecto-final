import { useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";

function Turnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const traerTurnos = async () => {
      try {
        const respuestaBack = await axiosInstancia.get("/api/turnos");
        setTurnos(respuestaBack.data.turnos);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.data.msg || "Error al traer los turnos",
          timer: 2000,
        });
      }
    };
    traerTurnos();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center font-semibold text-[#A2AF9B]">
        MIS TURNOS
      </h1>
      <section>
        {turnos.map((turno, index) => (
          <div
            key={index}
            className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-60 mt-8 flex-col"
          >
            <h2 className="text-xl text-white p-4">
              Doctor: {turno.medico.nombre}
            </h2>
            <h2 className="text-xl text-white p-4">
              Especialidad: {turno.medico.especialidad}
            </h2>
            <h2 className="text-xl text-white p-4">Fecha {turno.fecha}:</h2>
            <h2 className="text-xl text-white p-4">Motivo: {turno.motivo}</h2>
            <h2 className="text-xl text-white p-4">Estado: {turno.estado}</h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default Turnos;
