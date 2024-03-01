/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./script.js"

  ],

  // add daisyUI plugin
  plugins: [require("daisyui"),
  require("tailwindcss-animate")],

}

