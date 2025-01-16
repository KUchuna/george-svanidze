import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
    return (
        <header className="flex flex-col">
            <h1 className="font-grotesk uppercase text-[11.7vw] leading-none font-medium select-none">george svanidze</h1>
            <div className="flex px-2 justify-between">
                <span className="text-gray-1">
                    Product
                    <br />
                    Designer
                </span>
                <ThemeChanger />
                <span className="text-right">
                    <Link href="/projects">Projects</Link>
                    <br />
                    <Link href="/about">About</Link>
                </span>
            </div>
        </header>
    )
}