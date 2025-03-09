/* eslint-disable @next/next/no-img-element */

import AboutHeader from "@/components/AboutPage/AboutHeader/AboutHeader";
import Carousel from "@/components/AboutPage/Carousel/Carousel";
import Description from "@/components/AboutPage/Description/Description";
import Header from "@/components/Header/Header";

export default function About() {
    return (
        <>
            <Header />
            <main>
                <div className="px-2">
                    <AboutHeader />
                    <Carousel />
                    <Description />
                </div>
                <img src="/pictures/about/nextproject.png" alt="" className="mt-10 p-2"/>
            </main>
        </>
    )
}