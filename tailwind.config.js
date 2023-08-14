/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        error: {
          '0%, 100%': { transform: 'translateX(1em)' },
          '50%': { transform: 'translateX(-1em)' },
        }
      }
    },
  },
  plugins: [],
}

