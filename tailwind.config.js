/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,vue}"],
    theme: {
        fontFamily: {
            body: ["industry", "sans-serif"],
            display: ["miller-display", "serif"],
        },
        extend: {
            colors: {
                para: "#1976d2",
                print: "#26a69a",
            },
        },
    },
    plugins: [],
}
