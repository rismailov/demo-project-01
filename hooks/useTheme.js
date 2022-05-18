import { useState, useEffect } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(null);

    // handles state and local storage
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme);
        } else {
            localStorage.setItem('theme', 'light');

            setTheme('light');
        }
    }, []);

    // handles html (root) element class
    useEffect(() => {
        if (!theme) return;

        const rootEl = document.documentElement;

        if (theme === 'light') {
            rootEl.removeAttribute('class');
        } else {
            rootEl.setAttribute('class', theme);
        }
    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => {
            var theme = prevTheme === 'dark' ? 'light' : 'dark';

            localStorage.setItem('theme', theme);

            return theme;
        });
    }

    return [theme, toggleTheme];
}
