/** @poemstyle {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily:{
      'cursive':[
          "lobster, sans-serif"
      ]
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
};