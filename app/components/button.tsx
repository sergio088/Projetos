import Link from "next/link";

interface botao {
  children: React.ReactNode;
}

export default function Button({ children }: botao) {
  return (
    <Link
      href="/Projetos"
      className="border-2 border-purple-500 rounded-2xl p-2  text-white bg-purple-500 hover:bg-purple-700"
    >
      {children}
    </Link>
  );
}
