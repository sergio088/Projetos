import T1 from "./components/bigtext";
import Image from "next/image";
import foto from "@/public/Homemsentado.jpg";
import Button from "./components/button";

export default function Header() {
  return (
    <div className="bg-white px-6 lg:px-12 xl:px-18">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-3">
        <div className="lg:w-3xl order-2 ">
          <div className="space-y-3">
            <T1>Transformo Ideias em Interfaces Modernas</T1>

            <p className="text-gray-400">
              Bem-vindo ao meu portfólio! Navegue por projetos que unem
              criatividade, código limpo e design funcional. Cada seção reflete
              minha jornada no desenvolvimento web.
            </p>
          </div>
          <div className="mt-12">
            <Button>Ver meus projetos</Button>
          </div>
        </div>
        <div className="lg:order-2 ">
          <Image
            src={foto}
            alt="Homem sentado tendo ideia"
            width={500} // largura em pixels
            height={500} // altura em pixels
          />
        </div>
      </div>
    </div>
  );
}
