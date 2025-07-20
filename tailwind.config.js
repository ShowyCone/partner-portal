/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rwa: '#00A795',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
