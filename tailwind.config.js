module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                f9gray: '#F9F9F9',
                github: '#333',
                twitter: '#1da1f2',
                discord: '#7289da',
                'kwilabs-red': '#E71D36',
                'kwilabs-gray': '#495057',
                'kwilabs-black': '#212529'
            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
