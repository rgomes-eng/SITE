import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8750A',
          dark: '#C5620A',
          light: '#F59340',
        },
        secondary: {
          DEFAULT: '#1A3A6B',
          dark: '#0F2347',
          light: '#2A5BA8',
        },
        accent: {
          DEFAULT: '#5C2D0E',
          light: '#7A3D12',
        },
        background: {
          dark: '#0F1B2D',
          card: '#162032',
        },
        border: {
          DEFAULT: '#1E2D42',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
