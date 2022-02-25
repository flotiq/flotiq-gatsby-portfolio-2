module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#323232',
                secondary: '#0083FC',
                gray: '#969696',
                'light-gray': '#f1f1f1',
                'lighter-gray': '#f9f9f9',
            },
            fontFamily: {
                lora: ['Lora', 'sans-serif'],
                archivo: ['Sora', 'sans-serif'],
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
