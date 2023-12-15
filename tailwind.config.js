/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'bg-mountains': "url('https://i.ibb.co/BZ9dKfT/mountains.png')",
        'bg-stars': "url('https://i.ibb.co/kc8zg4N/stars.png')",
        'bg-sun': "url('https://i.ibb.co/vxMRpMv/sun.png')",
        'bg-planet': "url('https://i.ibb.co/5n01BJ1/planets.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
