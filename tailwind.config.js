/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        primary: '#5d0c1d',
        secondary: '#d0b48f',
        tertiary:"#ffdeb2",
      },
      textColor: {
        primary: '#5d0c1d',
        secondary: '#d0b48f',
        tertiary:"#ffdeb2",
      },
      borderColor: {
        primary: '#5d0c1d',
        secondary: '#d0b48f',
        tertiary:"#ffdeb2",
      },
    },
  },
  plugins: [],
}

