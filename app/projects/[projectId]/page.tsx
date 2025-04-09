import NavCarousel from "@/components/projectPages/NavBar/NavCarousel";
import ProjectImages from "@/components/projectPages/ProjectImages";
import data from "@/public/lib/projectData"

interface Project {
  id: number;
  title: string;
}

export async function generateStaticParams() {
  const projects: Project[] = data
 
  return projects.map((project) => ({
    projectId: project.id.toString(),
  }))
}

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {

  const projectId: number = parseInt((await params).projectId);
  
   return (
    <>
      <NavCarousel 
        id={projectId}
      />
      <main className="flex flex-col p-2 gap-3 dark:bg-[#141414] bg-[white]">
          <ProjectImages 
            projectId={projectId}
          />
      </main>
    </>
  );
}
