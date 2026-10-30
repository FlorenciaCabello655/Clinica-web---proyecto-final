import { useContext, useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";
import { Context } from "../../context/context";

function Turnos() {
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
        MIS TURNOS
      </h1>
      <section>
        {turnos.map((turno, index) => (
          <div
            key={index}
            className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-60 mt-8 flex-col"
          >
            <h2 className="text-xl text-white p-2">
              Doctor: {mayusculas(turno.medico.nombre)}
            </h2>
            <h2 className="text-xl text-white p-2">
              Especialidad:{" "}
              {turno.medico.especialidad.chartAt(0).toUpperCase() +
                turno.medico.especialidad.slice(1)}
            </h2>
            <h2 className="text-xl text-white p-2">Fecha {formatearFecha(turno.fecha)}:</h2>
            <h2 className="text-xl text-white p-2">
              Motivo:{" "}
              {turno.motivo.chartAt(0).toUpperCase() + turno.motivo.slice(1)}
            </h2>
            <h2 className="text-xl text-white p-2">
              Estado:{" "}
              {turno.estado.chartAt(0).toUpperCase() + turno.estado.slice(1)}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default Turnos;
