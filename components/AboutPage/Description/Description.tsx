import aboutProjects from "@/public/lib/aboutProjects.js"

export default function Description() {
    return (
        <section className="w-full flex flex-col">
            <div className="flex justify-between py-16 border-b border-[#EBEBEB] dark:border-[#353535]">
                <span className="text-5xl font-bold font-grotesk sticky top-4 h-full">
                    All About Me
                </span>
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className="font-medium font-grotesk text-[1.75rem]">With more than 6 years of experience creating digital products for brands.</h3>
                    <div className="flex flex-col gap-8 text-gray-4 font-inter text-lg">
                        <p>
                            I’m a digital product designer with a background in graphic design, but my journey into design wasn’t exactly traditional. I actually graduated from medical university, but somewhere along the way, I realized my passion lay elsewhere—creating, problem-solving, and making digital experiences better.
                        </p>
                        <p>
                            I’ve always loved drawing, even though I was never particularly great at it. That creative spark, mixed with my love for challenges, led me to the world of UX/UI design, where I get to blend logic, aesthetics, and user needs into something meaningful. 
                        </p>
                        <p>
                            Outside of work, music is my lifeline—seriously, I can’t function without it. And when I’m not designing or listening to music, I’m probably running around after my 3-year-old twins, who keep me on my toes and make life infinitely more fun.
                        </p>
                        <p>
                            I’m constantly driven by the thrill of a good challenge—whether it’s in my work or everyday life. For me, design isn’t just about aesthetics; it’s about solving problems, pushing boundaries, and evolving with every project. Each challenge is a chance to learn, grow, and create something better than before.
                        </p>
                        <p>
                            Let’s build something impactful together. 🚀
                        </p>
                    </div>
                 </div>
            </div>
            
            <div className="flex justify-between pt-16">
                <span className="text-5xl font-bold font-grotesk sticky top-4 h-full">
                    Work experience
                </span>
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className="font-medium font-grotesk text-[1.75rem]">With more than 6 years of experience creating digital products for brands.</h3>
                    <div className="flex flex-col gap-8 ">
                       {aboutProjects.map((project, index) => (
                            <div key={index} className="flex flex-col font-grotesk">
                                <img src={project.img} alt="project image" className="h-[80px] w-[80px] mb-4"/>
                                <span className="font-bold text-lg">{project.title}</span>
                                <span className="font-bold text-lg">{project.date}</span>
                                <span className="font-bold text-lg">{project.region}</span>
                                <div className="flex flex-col gap-4 text-gray-4 font-inter mt-6">
                                    <p>{project.p1}</p>
                                    <p>{project.p2}</p>
                                </div>
                            </div>
                       ))}
                    </div>
                 </div>
            </div>
        </section>
    )
}