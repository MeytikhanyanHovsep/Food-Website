import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: {max: '700px'},
            md: {max: '880px'},
            lg: {max: '1200px'},
        },
        colors: {
            dark: '#121619',
            current: '#f7b035',
        },
    },
    plugins: [],
};
export default config;
