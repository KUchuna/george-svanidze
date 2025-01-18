import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header 
        mainPage
      />
      <main className="text-5xl font-grotesk flex justify-center items-center mt-20 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod modi unde, veniam natus tempora neque error et eligendi odio. Velit voluptate qui obcaecati, facere veritatis harum soluta fugit maxime.
      </main>
      <Footer />
    </>
  );
}
