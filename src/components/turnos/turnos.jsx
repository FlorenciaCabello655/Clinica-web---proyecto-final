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
              Doctor: {turno.medico.nombre}
            </h2>
            <h2 className="text-xl text-white p-2">
              Especialidad: {turno.medico.especialidad}
            </h2>
            <h2 className="text-xl text-white p-2">Fecha {turno.fecha}:</h2>
            <h2 className="text-xl text-white p-2">Motivo: {turno.motivo}</h2>
            <h2 className="text-xl text-white p-2">Estado: {turno.estado}</h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default Turnos;
