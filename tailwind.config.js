/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        primary: '#10222e',
        secondary: '#fffee6',
        tertiary:"#fcffee",
      },
      textColor: {
        primary: '#10222e',
        secondary: '#fffee6',
        tertiary:"#fcffee",
      },
      borderColor: {
        primary: '#10222e',
        secondary: '#fffee6',
        tertiary:"#fcffee",
      },
    },
  },
  plugins: [],
}

