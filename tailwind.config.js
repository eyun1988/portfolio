module.exports = {
    content: [
        "./pages/**/*.{html,js,tsx,ts}",
        "./components/**/*.{html,js,tsx,ts}",
    ],
    plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
