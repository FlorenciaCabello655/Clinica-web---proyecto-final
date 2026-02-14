function TurnosDoctor(){
return(
    <>
    <h1 className="text-4xl text-center font-semibold text-[#A2AF9B]">TURNOS PACIENTES</h1>
    <section>
        <div className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-60 mt-8 flex-col">
        <h2 className="text-xl text-white p-4">Paciente:</h2>
        <h2 className="text-xl text-white p-4">Fecha:</h2>
        <h2 className="text-xl text-white p-4">Hora:</h2>
        <h2 className="text-xl text-white p-4">Sintomas:</h2>
        </div>
    </section>
    </>
)
}

export default TurnosDoctor;