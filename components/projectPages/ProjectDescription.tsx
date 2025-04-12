import data from "@/public/lib/projectData"
import "@/app/globals.css"

export default function ProjectDescription({projectId}: {projectId: number}) {
    const project = data.find(p => p.id === projectId);

    return (
        <div className="flex flex-col w-[60%]">
            <h3 className="lg:text-5xl text-2xl font-medium mb-10">Project information</h3>
            <div id="project-description" className={` dark:text-[#878392] text-[#3F3F3F] text-[12px] lg:text-2xl`} dangerouslySetInnerHTML={{__html: project?.description || ""}}>
            </div>
        </div>
    )
}