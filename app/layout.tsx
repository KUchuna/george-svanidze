import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "George Svanidze",
  description: "Personal portfolio website of UI/UX Designer, Giorgi Svanidze",
  openGraph: {
    images: [{
      url: "opengraph.png",
      width: 1200,
    }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="h-full">
      <body className="flex flex-col h-full bg-black dark:bg-[#232323]" suppressHydrationWarning>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
