'use client';
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Theme = 'neon' | 'light' | 'coffee' | 'dracula';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('neon');

    // Aplicar el tema al <html> cuando cambie
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme debe usarse dentro de ThemeProvider');
    return context;
}