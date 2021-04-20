module.exports = {
   ppurge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily:{
         sans: ['Poppins', 'sans-serif']
      },
      extend: {
         colors:{
            black:{
               DEFAULT: 'black',
               default:'#1E1E1E',
               light: '#282828',
               lightest: '#404040'
            },
            mainBlue: '#325DA8',
            mainGrey: '#9E9E9E'
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
