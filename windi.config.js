import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    extract: {
        include: ['**/*.{jsx,tsx,css}'],
        exclude: ['node_modules', '.git', '.next'],
    },
    darkMode: 'class',
    theme: {
        container: {
            padding: '1rem',
            center: true,
            screens: {
                sm: '560px',
                md: '692px',
                lg: '944px',
                xl: '1200px',
                '2xl': '1456px',
            },
        },
        extend: {
            screens: { xs: '475px' },
            // l for Light, d for Dark themes
            colors: {
                primary: '#3B71FE',
                'primary-hover': '#5483fe',
                'primary-active': '#225ffe',
                'l-text': 'rgba(14, 14, 44, 0.55)',
                'l-title': '#0E0E2C',
                'l-bg': '#FFFFFF',
                'd-text': '#A0A4AB',
                'd-title': '#FFFFFF',
                'd-bg': '#262A31',
            },
        },
    },
    shortcuts: {
        btn: 'text-sm font-medium rounded-md shadow-md text-white transition-colors focus:ring-2',
        'btn-sm': 'py-2 px-5',
        'btn-md': 'py-3 px-6',
        'btn-primary': 'bg-primary hover:bg-primary-hover ring-blue-400',
    },
    plugins: [],
});
