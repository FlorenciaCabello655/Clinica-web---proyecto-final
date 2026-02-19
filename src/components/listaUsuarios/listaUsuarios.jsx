import { useContext, useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";
import { Context } from "../../context/context";

function ListaUsuarios() {
  const [medicos, setMedicos] = useState([]);
  const { setLoading } = useContext(Context);

  useEffect(() => {
    const traerMedicos = async () => {
      setLoading(true);
      try {
        const respuestaBack = await axiosInstancia.get("/api/users/medicos");
        setMedicos(respuestaBack.data.medicos);
        setLoading(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.msg || "Error al traer los medicos",
          timer: 2000,
        });
        setLoading(false);
      }
    };
    traerMedicos();
  }, [setLoading]);

  const traerMedicosActualizados = async () => {
    setLoading(true);
    try {
      const respuestaBack = await axiosInstancia.get("/api/users/medicos");
      setMedicos(respuestaBack.data.medicos);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg || "Error al traer los medicos",
        timer: 2000,
      });
      setLoading(false);
    }
  };

  const aceptarMedico = async (idDeMedico) => {
    setLoading(true);
    try {
      const respuestaBack = await axiosInstancia.put(
        `/api/users/medico/${idDeMedico}/aceptar`,
      );
      Swal.fire({
        icon: "success",
        title: respuestaBack.data.msg || "Doctor/a aceptado",
        timer: 2000,
      });
      setLoading(false);
      traerMedicosActualizados();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.msg || "Error al aceptar.",
        timer: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center text-[#A2AF9B] font-semibold">
        USUARIOS
      </h1>
      <section>
        {medicos.map((medico, index) => (
          <div
            key={index}
            className="flex justify-center bg-[#A2AF9B] rounded-lg w-full mt-8 flex-col"
          >
            <h2 className="text-xl text-white p-2">Nombre:{medico.nombre}</h2>
            <h2 className="text-xl text-white p-2">
              Numero de telefono:{medico.telefono}
            </h2>
            <h2 className="text-xl text-white p-2">
              Especialidad:{medico.especialidad}
            </h2>
            <h2 className="text-xl text-white p-2">Email:{medico.email}</h2>
            <h2 className="text-xl text-white p-2">Estado:{medico.estado}</h2>

            {medico.estado == "pendiente" && (
              <div className="flex">
                <button
                  className="bg-green-500 h-auto w-auto ms-2 rounded-lg text-white p-2 cursor-pointer"
                  onClick={() => aceptarMedico(medico._id)}
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

export default ListaUsuarios;
