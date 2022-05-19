import { useContext } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useEffect } from 'react';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggler() {
    const [theme, toggleTheme] = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            title={`Toggle ${theme} theme`}
            aria-label={`Toggle ${theme} theme`}
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600 text-l-text dark:text-d-text"
        >
            {theme === 'dark' ? (
                <IoSunny className="w-4.5 h-4.5" />
            ) : (
                <IoMoon className="w-4.5 h-4.5" />
            )}
        </button>
    );
}
