/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      /* 🔤 Custom Font */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      /* 🎯 Custom Max Width */
      maxWidth: {
        '8xl': '1440px',
      },

      /* 💡 Hero Custom Font Sizes */
      fontSize: {
        'hero-lg': ['80px', { lineHeight: '1.05' }],
        'hero-md': ['64px', { lineHeight: '1.1' }],
      },

      /* 🎨 Brand Colors */
      colors: {
        brand: {
          primary: '#84cc16',
        },
      },

      /* 🔥 PREMIUM ANIMATIONS */

      keyframes: {

        /* Floating blob */
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        /* Parallax grid move */
        gridMove: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(60px)' },
        },

        /* Light rotation glow */
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        /* Subtle background drift */
        drift: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' },
        },

        /* Glow pulse */
        glow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },

      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        gridMove: 'gridMove 20s linear infinite',
        rotateSlow: 'rotateSlow 12s linear infinite',
        drift: 'drift 8s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}
