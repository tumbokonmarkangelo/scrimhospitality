/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                'gray-1': '#EBE9E8',
                'gray-2': '#F4F4F4',
                'gray-3': '#BFB7AC',
                'gray-4': '#242424',
                'brown-1': '#291F1C',
                'brown-2': '#442D25',
            },
        },
        fontFamily: {
          'sans': ['Poppins'],
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
