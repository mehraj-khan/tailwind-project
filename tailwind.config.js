/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        red:{
          500 : "#e54b4b"
        },
        white:{
          500 : "#ffffff",
          200 : "#f9f9f9"
        },
        gray:{
          500 : "#767676"
        }
      }
    },
  },
  plugins: [],
}

