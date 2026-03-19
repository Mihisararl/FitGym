import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                bg: "var(--color-bg)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
                muted: "var(--color-muted)",
                border: "var(--color-border)"
            },
            backgroundImage: {
                "brand-gradient": "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
            },
            fontFamily: {
                heading: ["var(--font-heading)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"]
            },
            boxShadow: {
                glow: "0 10px 30px rgba(255, 106, 0, 0.25)"
            }
        }
    },
    plugins: []
};

export default config;
