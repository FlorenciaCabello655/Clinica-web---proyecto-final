import { useContext, useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";
import { Context } from "../../context/context";

function TurnosDoctor() {
  const [turnos, setTurnos] = useState([]);
  const { setLoading } = useContext(Context);

  useEffect(() => {
    const traerTurnos = async () => {
      setLoading(true);
      try {
        const respuestaBack = await axiosInstancia.get("/api/turnos");
        setTurnos(respuestaBack.data.turnos);
        setLoading(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.msg || "Error al traer los turnos",
          timer: 2000,
        });
        setLoading(false);
      }
    };
    traerTurnos();
  }, [setLoading]);

  const traerTurnosActualizados = async () => {
    setLoading(true);
    try {
      const respuestaBack = await axiosInstancia.get("/api/turnos");
      setTurnos(respuestaBack.data.turnos);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg || "Error al traer los turnos",
        timer: 2000,
      });
      setLoading(false);
    }
  };

  const aceptarTurno = async (idDeTurno) => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg || "Error al aceptar turno.",
        timer: 2000,
      });
      setLoading(false);
    }
  };

  const cancelarTurno = async (idDeTurno) => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg || "Error al cancelar turno",
        timer: 2000,
      });
      setLoading(false);
    }
  };

   function mayusculas(str) {
    if (!str) return "";

    return str
      .split(" ")
      .map((palabra) =>
        palabra ? palabra.charAt(0).toUpperCase() + palabra.slice(1) : "",
      )
      .join(" ");
  }

   function formatearFecha(fecha = new Date()) {
    const formateador = new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return formateador.format(fecha).replace(",", "");
  }

  return (
    <>
      <h1 className="text-4xl text-center font-semibold text-[#A2AF9B]">
        TURNOS PACIENTES
      </h1>
      <section>
        {turnos.map((turno, index) => (
          <div
            className="flex justify-center bg-[#A2AF9B] rounded-lg w-full mt-8 flex-col p-2"
            key={index}
          >
            <h2 className="text-xl text-white p-2">
              Paciente:{mayusculas(turno.paciente.nombre)}
            </h2>
            <h2 className="text-xl text-white p-2">Fecha:{formatearFecha(turno.fecha)}</h2> 
            <h2 className="text-xl text-white p-2">Motivo:{turno.motivo.charAt(0).toUpperCase() + turno.motivo.slice(1)}</h2>
            <h2 className="text-xl text-white p-2">Estado:{turno.estado.charAt(0).toUpperCase() + turno.estado.slice(1)}</h2>
            {turno.estado == "pendiente" && (
              <div className="flex">
                <button
                  className="bg-red-500 hover:bg-red-400 duration-200 cursor-pointer h-auto w-auto rounded-lg text-white p-2"
                  onClick={() => cancelarTurno(turno._id)}
                >
                  RECHAZAR
                </button>
                <button
                  className="bg-green-500 hover:bg-green-400 duration-200 cursor-pointer h-auto w-auto ms-6 rounded-lg text-white p-2"
                  onClick={() => aceptarTurno(turno._id)}
                >
                  ACEPTAR
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default TurnosDoctor;
