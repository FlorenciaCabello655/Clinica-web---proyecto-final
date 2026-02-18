import { useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";

function TurnosDoctor() {
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

  const traerTurnosActualizados = async () => {
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

  const aceptarTurno = async (idDeTurno) => {
    try {
      const respuestaBack = await axiosInstancia.put(
        `/api/turnos/${idDeTurno}/confirmar`,
      );
      Swal.fire({
        icon: "success",
        title: respuestaBack.data.msg || "Turno aceptado",
        timer: 2000,
      });
      traerTurnosActualizados();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.data.msg || "Error al aceptar turno.",
        timer: 2000,
      });
    }
  };

  const cancelarTurno = async (idDeTurno) => {
    try {
      const respuestaBack = await axiosInstancia.put(
        `/api/turnos/${idDeTurno}/cancelar`,
      );
      Swal.fire({
        icon: "success",
        title: respuestaBack.data.msg || "Turno cancelado",
        timer: 2000,
      });
      traerTurnosActualizados();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.data.msg || "Error al cancelar turno",
        timer: 2000,
      });
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-semibold text-[#A2AF9B]">
        TURNOS PACIENTES
      </h1>
      <section>
        {turnos.map((turno, index) => (
          <div
            className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-60 mt-8 flex-col"
            key={index}
          >
            <h2 className="text-xl text-white p-4">
              Paciente:{turno.paciente.nombre}
            </h2>
            <h2 className="text-xl text-white p-4">Fecha:{turno.fecha}</h2>
            <h2 className="text-xl text-white p-4">Motivo:{turno.motivo}</h2>
            <h2 className="text-xl text-white p-4">Estado:{turno.estado}</h2>
            <div className="flex">
              <button
                className="bg-red-500 h-auto w-auto ms-6 rounded-lg text-white p-2"
                onClick={() => cancelarTurno(turno.id)}
              >
                RECHAZAR
              </button>
              <button
                className="bg-green-500 h-auto w-auto ms-6 rounded-lg text-white p-2"
                onClick={() => aceptarTurno(turno.id)}
              >
                ACEPTAR
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default TurnosDoctor;
