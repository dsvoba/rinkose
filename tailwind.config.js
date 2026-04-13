/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.{html,md}",
    "./*.{html,md}"
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        shake: {
          "0%, 100%": {
              transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
              transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
              transform: "translateX(10px)",
          },
        }
      },
      animation: {
        shake: 'shake 0.6s ease-in-out 0.25s 1',
      },
    }
  },
  plugins: [],
}
