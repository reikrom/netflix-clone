const colors = {
    primary: {
        1: '#e1bee7',
        2: '#7b1fa2',
        3: '#9c27b0',
    },
    secondary: {
        1: '#ff80ab',
        2: '#f50057',
        3: '#ff4081',
    },
    dark: {
        1: '#424242',
        2: '#303030',
        3: '#212121',
        4: '#000000',
    },
    light: {
        1: '#ffffff',
        2: '#fafafa',
        3: '#f5f5f5',
        4: '#e0e0e0',
    },
    red: 'red',
};

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
