"use client"
import "./loader.css"
import { useTheme } from "next-themes";

export default function Loader() {
  const { theme } = useTheme();

  const color = theme === "dark" ? "white" : "black";

  return (
    <div
      className="container"
      style={{
        "--uib-color": color,
      } as React.CSSProperties}
    />
  );
}
