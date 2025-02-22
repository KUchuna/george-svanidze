import ThemeChanger from "./ThemeChanger";
import NavigationButtons from "./NavigationButtons";

interface HeaderProps {
    mainPage?: boolean
}

export default function Header({mainPage}: HeaderProps) {
    
    return (
        <header className="flex flex-col">
            {mainPage ? 
                <h1 className="font-grotesk uppercase text-[11.6vw] leading-none font-medium select-none text-center">george svanidze</h1>
                : 
                <div className="uppercase w-full flex justify-center py-4 font-grotesk">g &#8226; s</div>
            }
            <div className="px-2">
                <div className="flex justify-between border-b border-[#EBEBEB] dark:border-[#353535] pb-6 font-inter">
                    <span className="text-gray-1">
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