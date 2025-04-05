import NotFound from "@/app/not-found";
import data from "@/public/lib/projectData"
import Image from "next/image";

export default async function ProjectImages({projectId}: {projectId: number}) {

    const project = data.find(p => p.id == projectId)

    if(project == undefined) {
        return <NotFound innerpage/>
    }


    return (
        <main className="flex flex-col p-2 gap-3">
            {project?.images?.map((row, rowIndex) => (
              <div key={rowIndex} className={`flex gap-3 w-full ${row.length > 1 ? "flex-row" : "flex-col"}`}>
              {row.map(async (src, index) => {
                return (
                    <Image 
                    key={index}
                    src={src.replace('./public', '')}
                    alt="" 
                    width={100}
                    height={100}
                    className={`h-full ${row.length > 1 ? "flex-1 basis-0" : "w-full"}`}
                    priority
                    loading="eager"
                    unoptimized
                    />
                )
                })}
              </div>
          ))}
        </main>
    )
}