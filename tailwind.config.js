/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      bona: ["Bruno Ace SC", "serif"]
    },
    extend: {
      textShadow: {
        neon: '0 0 6px #00C8FF, 0 0 12px #00C8FF',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-neon': {
          textShadow: '0 0 6px #00C8FF, 0 0 12px #00C8FF',
        }
      })
    }
  ],
}

