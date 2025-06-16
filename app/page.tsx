import T1 from "./components/bigtext";
import Image from "next/image";
import foto from "@/public/Homemsentado.jpg";

export default function Header() {
  return (
    <div className="bg-white px-12">
      <div className="flex justify-between items-center">
        <div className="w-3xl space-y-3">
          <div className="bg-purple-400"></div>
          <T1>Transformo Ideias em Interfaces Modernas</T1>

          <p className="text-gray-400">
            Bem-vindo ao meu portfólio! Navegue por projetos que unem
            criatividade, código limpo e design funcional. Cada seção reflete
            minha jornada no desenvolvimento web.
          </p>
        </div>
        <div>
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
