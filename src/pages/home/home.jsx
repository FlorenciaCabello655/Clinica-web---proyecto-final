import Banner from "../../components/banner/banner";
import Cardiologia from "../../assets/cardiologia.png.png";
import Clinica from "../../assets/clinicageneral.png";
import Pediatria from "../../assets/pediatria.png";
import Dermatologia from "../../assets/dermatologia.png";
import Oftalmologia from "../../assets/oftalmologia.png";
import Traumatologia from "../../assets/traumatologia.png";
import Imagen from "../../assets/clinicaimg.png";
import './home.css'

function Home() {
  return (
    <>
      <Banner></Banner>
      <section className=" flex justify-around mt-3">
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Cardiologia} alt="" className=" w-40 " />
          <h1>Cardiologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Clinica} alt="" className=" w-40 " />{" "}
          <h1>Clinica General</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Pediatria} alt="" className=" w-40 " /> <h1>Pediatria</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Traumatologia} alt="" className=" w-40 " />{" "}
          <h1>Traumatologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Dermatologia} alt="" className=" w-40 " />{" "}
          <h1>Dermatologia</h1>
        </div>
        <div className=" bg-[#A2AF9B] h-60 w-70 text-4xl text-white flex items-center justify-center rounded-lg flex-col">
          {" "}
          <img src={Oftalmologia} alt="" className=" w-40 " />{" "}
          <h1>Oftalmologia</h1>
        </div>
      </section>

      <section className="  flex justify-around">
  <div className="bg-[#A2AF9B] mx-5 mt-5 p-7 h-180 w- text-3xl text-white flex items-center justify-center rounded-lg flex-col">
    <h1 className="mb-9">Acerca de nosotros</h1>
    <h2 className="descripcion">
      Contamos con experiencia de mas de 10 años.
      Brindamos atención médica integral con un enfoque humano, profesional y
      cercano. Nuestro equipo de especialistas trabaja con compromiso y
      tecnología actual para cuidar tu salud y la de tu familia, priorizando
      siempre la confianza, la calidez y el bienestar.
    </h2>
    <img src={Imagen} alt="" className=" w-150 rounded-lg mt-6" />{" "}
  </div>
</section>;
    </>


  );
}



export default Home;
