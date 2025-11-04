/** @type {import('tailwindcss').Config} */
module.exports = {
    // 🌟 ตรวจสอบให้แน่ใจว่า Paths เหล่านี้ถูกต้อง
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#FB9E3A',
                'btn-block': '#000000',
                'colors-tw': '#FF0000',
                'colors-tb': '#000000',
                'background': '#FF0000'
            },
            borderWidth: {
                '3': '3px',
            }
        },
    },
    plugins: [],
}