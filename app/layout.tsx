import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useDarkMode";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["600", "700", "800"]
});

export const metadata: Metadata = {
    title: "FitGym | Unleash Your Potential",
    description:
        "FitGym is a modern fitness destination with expert trainers, world-class equipment, and transformative classes.",
    icons: {
        icon: "/images/logo.png"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${poppins.variable} bg-bg text-text antialiased transition-colors duration-300`}
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
