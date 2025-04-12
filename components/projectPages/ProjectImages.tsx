"use client"

import NotFound from "@/app/not-found";
import data from "@/public/lib/projectData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ProjectDescription from "./ProjectDescription";
import { motion } from "motion/react";
import ProjectTeam from "./ProjectTeam";

export default function ProjectImages({ projectId }: { projectId: number }) {
  const project = data.find(p => p.id === projectId);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const totalImages = project?.images?.flat().length || 0;

  useEffect(() => {
    if (imagesLoaded === totalImages && totalImages > 0) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded, totalImages]);

  if (project === undefined) {
    return <NotFound innerpage />;
  }

  const progress = totalImages > 0 ? Math.round((imagesLoaded / totalImages) * 100) : 0;


  function OnLoad() {
    setImagesLoaded((prev) => prev + 1)
  }

  return (
    <>
        <div className="flex flex-col md:gap-3 gap-1 h-full">
            {!allImagesLoaded && (
                <div className="w-full h-full flex flex-col justify-end items-left gap-4 mt-auto">
                    <Loader 
                      progress={progress}
                      id={projectId}
                    />
                </div>
            )}
        {project?.images?.map((row, rowIndex) => (
            <div
            key={rowIndex}
            className={`flex md:gap-3 gap-1 w-full ${row.length > 1 ? "flex-row" : "flex-col"} ${
                allImagesLoaded ? "" : "hidden"}`}
            >
            {row.map((src, index) => (
              <motion.div
              key={index}
              className={`flex md:gap-3 gap-1 w-full ${row.length > 1 ? "flex-row" : "flex-col"} ${
                allImagesLoaded ? "" : "hidden"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={allImagesLoaded ? { opacity: 1, height: "auto" } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: rowIndex * 0.1 }}
              >
                <Image
                  src={src.replace('./public', '')}
                  alt=""
                  width={2100}
                  height={1300}
                  className="h-full w-full object-cover rounded-sm"
                  priority
                  quality={100}
                  onLoad={() => OnLoad()}
                />
              </motion.div>
            ))}
            </div>
        ))}
        </div>
        <section className="font-grotesk flex gap-16">
          <ProjectDescription 
            projectId={projectId}
          />
          <ProjectTeam 
            projectId={projectId}
          />
        </section>
    </>
  );
}
