module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
   theme: {
      screens: {
         
      },
      extend: {
         colors: {
            'shadow-focus': '#1DA1F2',
            'custom-color': '#231d43',
            'custom-gray': '#97a8ad',
            'custom-gray-2': '#5b5b5b',
            'custom-black': '#101828',
            'custom-violet': '#4949A9',
            'custom-slate': '#3F4865',
            'custom-slate-alt': '#414362',
            'custom-gray-3': '#6A6A6D'
         },
         boxShadow: {
            'focus': '0px 0px 7px 0px rgb(0, 0, 0 / 0.25)'  
         },
         height: {
            '70': '17.5rem',
         },
         fontFamily: {
            'primary': ['Lato']
         }
      },
   },
   plugins: [
   ],
};
