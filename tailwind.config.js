import { plugin } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
   
    extend: {},
  },
  plugins: [
    function ({addUtilities}){
      addUtilities({
        'scrollbar-hide':{
          '    scrollbar-width':' none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',  
        },
      })
    }
  ],
}

