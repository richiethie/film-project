/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    backgroundImage: {
      'space-placeholder': "url('/src/assets/space-placeholder.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

