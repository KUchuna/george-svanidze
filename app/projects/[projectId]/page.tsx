import Header from "@/components/Header/Header";
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
      <Header />
      <NavCarousel 
        id={projectId}
      />
      <main className="flex h-full flex-col md:p-2 p-1 gap-3 dark:bg-[#141414] bg-[white] mt-[13rem] md:mt-[15rem]">
          <ProjectImages 
            projectId={projectId}
          />
      </main>
    </>
  );
}
