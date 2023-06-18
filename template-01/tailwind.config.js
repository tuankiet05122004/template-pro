/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./*.html"],
    content: [],
    theme: {
        screens: {
            small: "0px",
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {},
    },
    plugins: [],
    "tailwindCSS.emmetCompletions": true,
    "editor.inlineSuggest.enabled": true,
    "editor.quickSuggestions": {
        strings: true,
    },
    "css.validate": false,
};
