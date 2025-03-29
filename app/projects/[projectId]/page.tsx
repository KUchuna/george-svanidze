import Movan from "@/components/projectPages/Movan";
import Tbc from "@/components/projectPages/Tbc";
import Tier1 from "@/components/projectPages/Tier1";
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

export default async function Page({params,}: {params: Promise<{ projectId: string }>}) {
  const projectId: number = parseInt((await params).projectId)


  switch (projectId) {
    case 1:
      return <Tbc />
    case 8:
      return <Movan />
    case 11:
      return <Tier1 /> 
    }
}