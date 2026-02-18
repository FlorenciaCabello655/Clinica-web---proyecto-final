import { useEffect, useState } from "react";
import axiosInstancia from "../../api/apiAxios";
import Swal from "sweetalert2";

function ListaUsuarios() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const traerMedicos = async () => {
      try {
        const respuestaBack = await axiosInstancia.get("/api/users/medicos");
        setMedicos(respuestaBack.data.medicos);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.data.msg || "Error al traer los medicos",
          timer: 2000,
        });
      }
    };
    traerMedicos();
  }, []);

 const traerMedicosActualizados = async () => {
      try {
        const respuestaBack = await axiosInstancia.get("/api/users/medicos");
        setMedicos(respuestaBack.data.medicos);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.data.msg || "Error al traer los medicos",
          timer: 2000,
        });
      }
    };

 const aceptarMedico = async (idDeMedico) => {
    try {
      const respuestaBack = await axiosInstancia.put(
        `/api/users/medico/${idDeMedico}/aceptar`,
      );
      Swal.fire({
        icon: "success",
        title: respuestaBack.data.msg || "Doctor/a aceptado",
        timer: 2000,
      });
      traerMedicosActualizados();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.data.msg || "Error al aceptar.",
        timer: 2000,
      });
    }
  };


  return (
    <>
      <h1 className="text-4xl text-center text-[#A2AF9B] font-semibold">
        USUARIOS
      </h1>
      <section>
        {medicos.map((medico,index)=>(
        <div key={index} className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-100 mt-8 flex-col">
          <h2 className="text-xl text-white p-4">Nombre:{medico.nombre}</h2>
          <h2 className="text-xl text-white p-4">Numero de telefono:{medico.telefono}</h2>
          <h2 className="text-xl text-white p-4">Especialidad:{medico.especialidad}</h2>
          <h2 className="text-xl text-white p-4">Email:{medico.email}</h2>
          <h2 className="text-xl text-white p-4">Estado:{medico.estado}</h2>

          <div className="flex">
            <button className="bg-green-500 h-auto w-auto ms-6 rounded-lg text-white p-2" onClick={() => aceptarMedico(medico.id)}>
              ACEPTAR
            </button>
          </div>
        </div>
        ))}

      </section>
    </>
  );
}

export default ListaUsuarios;
