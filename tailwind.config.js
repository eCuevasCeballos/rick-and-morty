/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      header : ['Bruno Ace']
    },
    colors : {
      'g-blue' : '#11545f',
      'green' : '#6dddb6',
      'white' : '#fff',
      'black' : '#000'
    }
  },
  plugins: [],
}

