import ThemeChanger from "./ThemeChanger";
import NavigationButtons from "./NavigationButtons";
import Link from "next/link";


interface HeaderProps {
    mainPage?: boolean
}

export default function Header({mainPage}: HeaderProps) {

    return (
        <header className={`flex flex-col ${mainPage ? "" : "fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-[#141414]"} bg-white dark:bg-[#141414]`}>
            {mainPage ? 
                <h1 className="font-grotesk uppercase lg:text-[11.6vw] text-[11vw] lg:leading-none font-medium select-none text-center dark:bg-[#141414]">george svanidze</h1>
                : 
                <div className="w-full flex justify-center">
                    <Link href="/" className="w-fit">
                        <div className="uppercase flex justify-center py-4 font-grotesk">g &#8226; s</div>
                    </Link>
                </div>
            }
            <div className="md:px-2 px-1 dark:bg-[#141414]">
                <div className="flex justify-between border-b border-[#EBEBEB] dark:border-[#353535] pb-6 font-inter">
                    <span className="text-gray-1 text-[0.75rem] md:text-[1rem]">
                        Product
                        <br />
                        Designer
                    </span>
                    <ThemeChanger />
                    <NavigationButtons />
                </div>
            </div>
        </header>
    )
}