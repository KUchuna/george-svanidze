"use client"

import NotFound from "@/app/not-found";
import data from "@/public/lib/projectData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
        <div className="flex flex-col p-2 gap-3">
            {!allImagesLoaded && (
                <div className="w-full h-[80vh] flex flex-col justify-end items-left gap-4">
                    <Loader 
                      progress={progress}
                      id={projectId}
                    />
                </div>
            )}
        {project?.images?.map((row, rowIndex) => (
            <div
            key={rowIndex}
            className={`flex gap-3 w-full ${row.length > 1 ? "flex-row" : "flex-col"} ${
                allImagesLoaded ? "" : "hidden"}`}
            >
            {row.map((src, index) => (
              <div className="w-full" key={index}>
                  <Image
                  src={src.replace('./public', '')}
                  alt=""
                  width={2000}
                  height={1000}
                  className={`h-full ${row.length > 1 ? "flex-1 basis-0" : "w-full"}`}
                  priority
                  quality={100}
                  onLoad={() => OnLoad()}
                  />
              </div>
            ))}
            </div>
        ))}
        </div>
  );
}
