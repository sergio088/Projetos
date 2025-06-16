import A from "./link";

export default function Header() {
  return (
    <header className="bg-white p-12 w-full flex justify-between">
      <div className="flex space-x-1 items-center ">
        <span className="bg-purple-500 w-4 h-4 inline-block rounded"></span>

        <h1 className="text-black">Sergio088</h1>
      </div>

      <nav className="text-black space-x-3">
        <A href="/">Inicio</A>
        <A href="/Projetos">Projetos</A>
        <a
          href="https://www.linkedin.com/in/sergio-santos088/"
          className="hover:underline transition hover:text-purple-500"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
