import Banner from "../../components/banner/banner";
import Cardiologia from "../../assets/cardiologia.png.png";
import Clinica from "../../assets/clinicageneral.png";
import Pediatria from "../../assets/pediatria.png";
import Dermatologia from "../../assets/dermatologia.png";
import Oftalmologia from "../../assets/oftalmologia.png";
import Traumatologia from "../../assets/traumatologia.png";
import Imagen from "../../assets/clinicaimg.png";
import "./home.css";

function Home() {
  return (
    <>
      <Banner></Banner>
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 px-5 mt-3">
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Cardiologia} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Cardiologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Clinica} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Clinica General</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Pediatria} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Pediatria</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Traumatologia} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Traumatologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Dermatologia} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Dermatologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-full text-white flex items-center justify-center rounded-lg flex-col">
          <img src={Oftalmologia} alt="" className="w-30 md:w-32 lg:w-40 " />
          <h1 className="text-lg md:text-2xl lg:text-3xl">Oftalmologia</h1>
        </div>
      </section>
      <section className="  flex justify-around">
        <div className="bg-[#A2AF9B] mx-5 mt-5 p-7 h-180 w- text-3xl text-white flex items-center justify-center rounded-lg flex-col">
          <h1 className="mb-9">Acerca de nosotros</h1>
          <h2 className="descripcion">
            Somos una clínica con años de experiencia dedicados al cuidado
            integral de la salud. A lo largo de nuestra trayectoria, hemos
            trabajado con el compromiso constante de brindar atención médica de
            calidad, incorporando de manera continua nuevas tecnologías y
            prácticas actualizadas para ofrecer diagnósticos precisos y
            tratamientos seguros. Nuestro equipo profesional actúa con ética,
            responsabilidad y vocación de servicio, priorizando siempre el
            bienestar de nuestros pacientes.
          </h2>
          <img src={Imagen} alt="" className=" w-150 rounded-lg mt-6" />{" "}
        </div>
      </section>
      ;
    </>
  );
}

export default Home;
