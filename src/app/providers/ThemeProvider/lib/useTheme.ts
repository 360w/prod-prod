import { LOCAL_STORAGE_THEME_KEY, Themes } from './ThemeContext'
import { useContext } from 'react';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}