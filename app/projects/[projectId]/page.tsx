import NotFound from "@/app/not-found";
import Cardinal from "@/components/projectPages/Cardinal";
import Galileo from "@/components/projectPages/Galileo";
import Movan from "@/components/projectPages/Movan";
import NavCarousel from "@/components/projectPages/NavBar/NavCarousel";
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

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
  const projectId: number = parseInt((await params).projectId);

  const NotFoundPage = () => <NotFound innerpage />;

  let Component;

  switch (projectId) {
    case 1:
      Component = Tbc;
      break;
    case 5:
      Component = Cardinal;
      break;
    case 8:
      Component = Movan;
      break;
    case 9:
      Component = Galileo;
      break;
    case 11:
      Component = Tier1;
      break;
    default:
      Component = NotFoundPage;
    }


  return (
    <>
      <NavCarousel 
        id={projectId}
      />
      <Component />
    </>
  );
}
