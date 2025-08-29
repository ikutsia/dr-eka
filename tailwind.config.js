/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFE5E5',
        'pastel-blue': '#E5F3FF',
        'pastel-green': '#E5FFE5',
        'pastel-yellow': '#FFF8E5',
        'pastel-purple': '#F0E5FF',
        'soft-pink': '#FFB6C1',
        'soft-blue': '#87CEEB',
        'soft-green': '#98FB98',
        'soft-yellow': '#F0E68C',
        'soft-purple': '#DDA0DD',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
