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
    text: {
        1: '#808080',
    },
    red: 'red',
};

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: colors,
            zIndex: {
                '-10': -10,
                '-20': -20,
                '-30': -30,
                '-40': -40,
                '-50': -50,
                '-60': -60,
                '-70': -70,
                '-80': -80,
                '-90': -90,
                '-100': -100,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
