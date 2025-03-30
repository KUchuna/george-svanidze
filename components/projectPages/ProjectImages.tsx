import NotFound from "@/app/not-found";
import data from "@/public/lib/projectData"
import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

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
                
                const buffer = await fs.readFile(`./public/pictures/projects/cardinal/4.png`);
                const { base64 } = await getPlaiceholder(buffer);
                
                return (
                    <Image 
                    key={index}
                    src={src.replace('./public', '')}
                    alt="" 
                    width={100}
                    height={100}
                    className={`h-full ${row.length > 1 ? "flex-1 basis-0" : "w-full"}`}
                    placeholder='blur'
                    blurDataURL={base64}
                    unoptimized
                    />
                )
                })}
              </div>
          ))}
        </main>
    )
}