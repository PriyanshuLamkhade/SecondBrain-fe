/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"],
  theme: {
    extend: {
      screens:{
        '2xsm': '345px',
        "xsm":"462px"
      },
      colors:{
        purple:{
          300:"#e0e7fe",
          500:"#3e38a7",
          600:"#5046e4"
          
        }
      }
    },
  },
  plugins: [],
}

