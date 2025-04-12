import data from "@/public/lib/projectData";

export default function ProjectTeam({projectId}: {projectId: number}) {
    const project = data.find(p => p.id === projectId);
    
    return (
        <div className="max-w-[30%]">
            <h3 className="font-grotesk lg:text-5xl text-3xl font-medium mb-6 ">Team</h3>
            {project?.teamLead &&
                <div className="mb-4 dark:text-[#878392] text-black text-[12px] lg:text-2xl"><strong>Team lead:</strong> {project?.teamLead}</div>

            }
            {
                project?.type &&
                <div className="mb-4 dark:text-[#878392] text-black text-[12px] lg:text-2xl"><strong>Project type:</strong> {project?.type}</div>
            }
            <div className="dark:text-[#878392] text-black text-[12px] lg:text-2xl"><strong>Designers:</strong> {project?.designers?.map((designer, index) => {
                return (
                    <span key={index}>{designer}{index == project.designers.length-1 ? "" : ","} </span>
                )
            })}</div>
        </div>
    )
}