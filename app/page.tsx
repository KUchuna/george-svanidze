import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Card from "@/components/MainCard/Card";
import data from "@/public/lib/cardData.js"



export default function Home() {
  return (
    <>
      <Header 
        mainPage
      />
      <main className="text-5xl font-grotesk flex justify-center items-center mt-20 text-center">
        <div className="columns-4 gap-3 px-[0.625rem] pb-16 w-full">
          {data.map((card, index) => {
            return (
              <Card 
                key={index}
                id={card.id}
                index={index}
                img={card.img}
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
