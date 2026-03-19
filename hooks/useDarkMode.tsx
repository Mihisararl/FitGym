"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "fitgym-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem(STORAGE_KEY);

        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
            return;
        }

        if (storedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
            return;
        }

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);

    const value = useMemo(
        () => ({
            isDark,
            toggleTheme
        }),
        [isDark, toggleTheme]
    );

    return <ThemeContext.Provider value={ value }> { children } </ThemeContext.Provider>;
}

export function useDarkMode() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useDarkMode must be used inside ThemeProvider");
    }

    return context;
}
