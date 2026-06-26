/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0A2540',
        },
        gold: {
          50: '#fbf8f1',
          100: '#f5efd8',
          200: '#eadcb0',
          300: '#dec586',
          400: '#d4b36a',
          500: '#C9A961',
          600: '#b8944f',
          700: '#9a7a3f',
          800: '#7c6233',
          900: '#5e4a27',
        },
        surface: {
          50: '#F5F7FA',
          100: '#E8ECF1',
          200: '#D1D8E0',
          300: '#B0BCC9',
          400: '#8B97A8',
          500: '#6B7280',
          600: '#525A67',
          700: '#3D444F',
          800: '#282D36',
          900: '#14171C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
