module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        bluetext: {
        DEFAULT: '#00246B',
      },
        // bluetext: '#00246B', // Adding custom color
        lightsky: '#f7f8ff',
        bgblue: '#CADCFC',
      },
    },
  },
  plugins: [],
}
