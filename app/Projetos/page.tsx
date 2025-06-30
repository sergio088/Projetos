import Card from "../components/card";

export default function Projetos() {
  return (
    <div className="bg-white px-6 py-10">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Projetos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            titulo="Pagina de contato"
            url="https://contact-form-xi-ten.vercel.app/"
            github="https://github.com/sergio088/Contact-form"
            tecnologias="Next.js, Tailwind.css, "
            data="18/06"
          />
          <Card
            titulo="StockFlow"
            url="https://saas-flame-chi.vercel.app"
            github="https://github.com/sergio088/SaaS"
            tecnologias="Next.js, Tailwind.css, Node.js, MySQL"
            data="25/06"
          />
        </div>
      </div>
    </div>
  );
}
