/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '312px'
    },
    extend: {
      colors:{
    lightblack: '#162D59',
    black:  '#081536',
    skyblue: 'rgb(8, 203, 241)',
    orange: '#F27405',
    gray: '#C4C4C4',
      }
    },
  },
  plugins: [],
}
