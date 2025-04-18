/* eslint-disable @next/next/no-img-element */

import AboutHeader from "@/components/AboutPage/AboutHeader/AboutHeader";
import Carousel from "@/components/AboutPage/Carousel/Carousel";
import Description from "@/components/AboutPage/Description/Description";
import Header from "@/components/Header/Header";

export default function About() {
    return (
        <>
            <Header />
            <main className="dark:bg-[#141414] bg-white mt-[8rem]">
                <div className="md:px-2 px-1">
                    <AboutHeader />
                    <Carousel />
                    <Description />
                </div>
            </main>
        </>
    )
}