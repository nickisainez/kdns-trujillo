import { useEffect } from "react";
import { getDataFromTable } from "../../supabase/config";
import type { Project } from "../../interface/Proyecto";

export default function Card(props: Project) {
  const { name, description, image1, image2, image3, datetime, id } = props;

  const handleGetProjects = async () => {
    const proyectos = await getDataFromTable("proyectos", {
      key: "proyectos_id",
      value: Number(id),
    });
  };

  useEffect(() => {
    handleGetProjects();
  }, []);

 
  return (
    <div>
      <div className="bg-white opacity-25 rounded-lg shadow-2xl"></div>
      <div className="rounded-lg">
        <div className="bg-white rounded-lg">
          <div className="bg-white p-5 border-gray-100 rounded-lg">
          <img src={image1} />
            <h2 className="font-bold text-5xl h-16 text-center">
              {name ?? ""}  
            </h2>
            <p className="mt-10 h-20">{description.substring(0, 200)+'...'}</p>
            <p className="mt-20 text-blue-800 font-bold text-center">{datetime}</p>

                <div className="mt-10 flex justify-center items-center">
                <a
                href={`/proyectos/${id}`}
                className="bg-red-500 text-white p-2 font-bold rounded-full px-5"
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