import { Link } from "react-router";
import doctora from "../../assets/doctora_banner.png";

function Banner() {
  return (
    <>
      <div className="bg-[#DCCFC0] w-full h-150 flex justify-between items-center ps-10">
        <div className="max-w-[55%]">
          <h1 className="text-7xl text-[#A2AF9B] ">
            Bienvenidos a Clinica Web
          </h1>
          <h2 className="text-xl text-white">
            Brindamos atención médica integral con un enfoque humano,
            profesional y cercano. Nuestro equipo de especialistas trabaja con
            compromiso y tecnología actual para cuidar tu salud y la de tu
            familia, priorizando siempre la confianza, la calidez y el
            bienestar.
          </h2>
          <div>
            <Link className="p-2 rounded-full font-bold text-white duration-200 bg-[#A2AF9B]">
              Solicitar turno
            </Link>
          </div>
        </div>
        <div>
          <img src={doctora} alt="" className="h-150 w-auto" />
        </div>
      </div>
    </>
  );
}

export default Banner;
