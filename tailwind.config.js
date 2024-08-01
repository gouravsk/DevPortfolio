/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '25px',
        '5xl': '30px',
        '6xl': '40px',
        '7xl': '50px',
        '8xl': '68px',
        '9xl': '90px',
      },
      extend: {
        colors: {
          'custom-primary': '#0568FD',
          'custom-primary-dark': '#0000A4',
          'custom-secondary': '#00bd05',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif' ,'ui-sans-serif', 'system-ui']
        },
        boxShadow: {
          'custom-shadow1': '0 10px 20px rgba(0,0,0,0.1)',
          'custom-shadow2': '0 20px 40px rgba(0,67,167,0.25)',
        }
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/aspect-ratio'),
    ],
}

