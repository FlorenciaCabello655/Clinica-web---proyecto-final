function ListaUsuarios (){
    return(
        <>
        <h1 className="text-4xl text-center text-[#A2AF9B] font-semibold">USUARIOS</h1>
    <section>
        <div className="flex justify-center bg-[#A2AF9B] rounded-lg w-full h-100 mt-8 flex-col">
        <h2 className="text-xl text-white p-4">Nombre:</h2>
        <h2 className="text-xl text-white p-4">Numero de telefono:</h2>
        <h2 className="text-xl text-white p-4">Especialidad:</h2>
        <h2 className="text-xl text-white p-4">Email:</h2>
        <h2 className="text-xl text-white p-4">Estado:</h2>

            <div className="flex">
            <button className="bg-red-500 h-auto w-auto ms-6 rounded-lg text-white p-2"> RECHAZAR</button>
             <button className="bg-green-500 h-auto w-auto ms-6 rounded-lg text-white p-2"> ACEPTAR</button>
        </div>

        </div>
    </section>
        </>
    )
}

export default ListaUsuarios;