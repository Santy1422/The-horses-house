/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './App.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         "mobile-md": "400px"
      },
      fontFamily: {
         latoLight: ['Lato_300Light'],
         latoRegular: ['Lato_400Regular'],
         latoBold: ['Lato_700Bold'],
      },
      extend: {
         colors: {
            colorFondo: '#111111',
            colorBoton: '#000000',
            rojo: '#FA0606',
            labelDarkBlue: '#23254C',
            fondoConfig: '#F0F0F8',
            disabled: '#F3F2F2'
         },
         height: {
            '70': '17.5rem',
         },
         borderColor: theme => ({
            'custom-gray': 'var(--brand-colors-light-colors-gray-color-scales-gray-50, #CCC)'
          }),
          borderWidth: {
            '1': '1px'
          },
          screens: {
            '2xs': { min: '300px' },
            xs: { max: '575px' },
            sm: { min: '576px', max: '897px' },
            md: { min: '898px', max: '1199px' },
            lg: { min: '1200px' },
            xl: { min: '1259px' },
            '2xl': { min: '1359px' }
          },
   }
   },
   plugins: [],
};