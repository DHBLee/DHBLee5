/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral0" : "hsl(0, 0%, 100%)",
        "neutral100" : "hsl(240, 24%, 96%)",
        "neutral200" : "hsl(240, 26%, 92%)",
        "neutral600" : "hsl(234, 14%, 29%)",
        "neutral700" : "hsl(235, 13%, 19%)",
        "neutral800" : "hsl(235, 14%, 15%)",
        "neutral900" : "hsl(233, 18%, 9%)",
        "blue500" : "hsl(274, 90%, 73%)",
        "blue400" : "hsl(274, 90%, 80%)",
        "yellow500" : "hsl(37, 100%, 50%)",
        "orange500" : "hsl(15, 00%, 67%)",
        "orange800" : "hsl(15, 99%, 43%)"
      }
    },
  },
  plugins: [],
}

