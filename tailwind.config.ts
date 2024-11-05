import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        oracle: {
          DEFAULT: '#387478',
          50: '#f4f9f9',
          100: '#d9eeec',
          200: '#b3dcda',
          300: '#86c2c2',
          400: '#5ca3a5',
          500: '#42878a',
          600: '#387478',
          700: '#2c5659',
          800: '#274548',
          900: '#243a3d',
          950: '#102123',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Noto Sans Thai Looped'],
      },
    },
  },
  plugins: [typography()],
} satisfies Config
