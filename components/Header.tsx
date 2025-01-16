import ThemeChanger from "./ThemeChanger";

export default function Header() {
    return (
        <header className="flex flex-col">
            <h1 className="font-grotesk uppercase text-[11.7vw] leading-none font-medium select-none">george svanidze</h1>
            <div>
                <ThemeChanger />
            </div>
        </header>
    )
}