import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Card from "@/components/MainCard/Card";
import data from "@/public/lib/projectData.js"

export default function Home() {
  return (
    <>
      <Header 
        mainPage
      />
      <main className="text-5xl font-grotesk flex justify-center items-center lg:mt-20 pt-4 md:pt-0 text-center bg-white dark:bg-[#141414] rounded-b-2xl lg:rounded-b-none">
        <div className="lg:columns-4 lg:block flex flex-col lg:gap-3 gap-5 lg:px-[0.625rem] px-1 lg:pb-16 pb-8 w-full ">
          {data.map((card, index) => {
            return (
              <Card 
                key={index}
                id={card.id}
                index={index}
                img={card.img}
                imgDark={card.imgDark}
                title={card.title}
                tags={card.tags}
              />
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
