interface cardprops {
  titulo: string;
  url: string;
  github: string;
  tecnologias: string;
  data: string;
}

export default function Card({
  titulo,
  url,
  github,
  tecnologias,
  data,
}: cardprops) {
  return (
    <div className="border border-neutral-200 hover:border-neutral-400 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
          <span>🖼️</span> {/* Aqui entra uma imagem ou ícone */}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <a href={url} className="text-sm text-neutral-500 hover:underline">
            {url}
          </a>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div>
          <a href={github} className="text-sm text-purple-500 hover:underline">
            Ver no GitHub
          </a>
        </div>

        <div className="text-sm text-neutral-600">
          <p>Tecnologias:{tecnologias}</p>
          <p>Criado em:{data}</p>
        </div>
      </div>
    </div>
  );
}
