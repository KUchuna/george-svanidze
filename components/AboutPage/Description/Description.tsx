import Projects from "./Projects";

export default function Description() {
    return (
        <section className="w-full flex flex-col">
            <div className="flex md:flex-row flex-col md:justify-between md:py-16 py-10 border-b border-[#EBEBEB] dark:border-[#353535]">
                <span className="2xl:text-5xl md:text-4xl hidden md:block font-bold font-grotesk sticky top-48 h-full">
                    All About Me
                </span>
                <div className="md:w-1/2 w-full flex flex-col gap-6">
                    <h3 className="font-medium font-grotesk 2xl:text-[3rem] md:text-[1.5rem] text-[32px] leading-tight md:leading-normal">With more than 6 years of experience creating digital products for brands.</h3>
                    <div className="flex flex-col md:gap-8 gap-4 text-gray-4 font-inter md:text-lg text-sm">
                        <p>
                            I&apos;m a digital product designer with a background in graphic design, but my journey into design wasn&apos;t exactly traditional. I actually graduated from medical university, but somewhere along the way, I realized my passion lay elsewhere—creating, problem-solving, and making digital experiences better.
                        </p>
                        <p>
                            I&apos;ve always loved drawing, even though I was never particularly great at it. That creative spark, mixed with my love for challenges, led me to the world of UX/UI design, where I get to blend logic, aesthetics, and user needs into something meaningful. 
                        </p>
                        <p>
                            Outside of work, music is my lifeline—seriously, I can&apos;t function without it. And when I&apos;m not designing or listening to music, I&apos;m probably running around after my 3-year-old twins, who keep me on my toes and make life infinitely more fun.
                        </p>
                        <p>
                            I&apos;m constantly driven by the thrill of a good challenge—whether it&apos;s in my work or everyday life. For me, design isn&apos;t just about aesthetics; it&apos;s about solving problems, pushing boundaries, and evolving with every project. Each challenge is a chance to learn, grow, and create something better than before.
                        </p>
                        <p>
                            Let&apos;s build something impactful together. 🚀
                        </p>
                    </div>
                 </div>
            </div>
            
            <div className="flex justify-between md:py-16 py-8">
                <span className="hidden md:block 2xl:text-5xl md:text-4xl font-bold font-grotesk sticky top-48 h-full">
                    Work Experience
                </span>
                <div className="md:w-1/2 w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-8 ">
                       <Projects />
                    </div>
                 </div>
            </div>
        </section>
    )
}