import type { Project } from "../../interface/Proyecto";

export default function Card(props: Project) {
  const { name, description, image1, datetime, id } = props;

  return (
    <div className="rounded-lg bg-white shadow-2xl">
      <div className="rounded-lg">
        <div className="rounded-lg bg-white">
          <div className="rounded-lg border-gray-100 bg-white p-5">
            <img src={image1} />
            <h2 className="h-16 text-center text-5xl font-bold">{name ?? ""}</h2>
            <p className="mt-10 h-20">{description.substring(0, 200) + "..."}</p>
            <p className="mt-20 text-center font-bold text-blue-800">{datetime}</p>

            <div className="mt-10 flex justify-center">
              <a
                href={`/proyectos/${id}`}
                className="
                focus:shadow-outline
                rounded-lg
                bg-slate-800
                px-5
                py-2
                text-indigo-100
                transition-colors
                duration-150
                hover:bg-slate-900"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
