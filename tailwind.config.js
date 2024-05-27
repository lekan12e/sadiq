/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(17,5,213,1) 0%, rgba(200,17,47,1) 55%, rgba(0,212,255,1) 100%)',
      },
    },
  },
  plugins: [],
}

