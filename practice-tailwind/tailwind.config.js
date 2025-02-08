/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      backgroundImage: {
        'hero': "url('assets/collection-background.svg')",
        'card': "url('assets/thumbnail-background.svg')",
      },
      padding: {
        'p-custom': "clamp(3rem, 1.943661971830986rem + 4.507042253521126vw, 6rem)",
      },
      screen: {
        '2xl': "1540px"
      }
    },
  },
  plugins: [],
}

