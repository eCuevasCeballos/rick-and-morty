/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      logo : ['Ubuntu'],
      name : ['Bruno Ace']
    },
    colors : {
      'white' : '#fff',
      'black' : '#141414',
      'gray-nav' : '#282828',
      'gray-body': '#212121',
      'gray-text' : '#b3b1b1',
      'gray-text-soft' : '#fdfdfd',
      'gray-card' : '#2e2e2e',
      'blue-rick' : '#9edfd5',
      'yellow-morty' : '#f7f740'
    }
  },
  plugins: [],
}

