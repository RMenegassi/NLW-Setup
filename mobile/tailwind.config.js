/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'Inter-Regular',
        semibold: 'Inter-SemiBold',
        bold: 'Inter-Bold',
        extrabold: 'Inter-ExtraBold',
      },
    },
  },
  plugins: [],
};
