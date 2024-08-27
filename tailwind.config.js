/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        primary: ' #0F222D',
        secondary: '#EBE7D9',
        tertiary:"#FFF5D0",
        accent:"#fbc502",
      },
      textColor: {
        primary: ' #0F222D',
        secondary: '#EBE7D9',
        tertiary:"#FFF5D0",
        accent:"#fbc502",
      },
      borderColor: {
        primary: ' #0F222D',
        secondary: '#EBE7D9',
        tertiary:"#FFF5D0",
        accent:"#fbc502",
      },
    },
  },
  plugins: [],
}

