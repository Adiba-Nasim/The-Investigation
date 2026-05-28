/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#1a1410',
        paper:  '#f0e8d8',
        aged:   '#e8d9bc',
        gold:   '#c9a96e',
        crimson:'#8b2020',
        muted:  '#7a6a52',
        dark:   '#0d0b08',
      },
      fontFamily: {
        elite:   ['"Special Elite"', 'cursive'],
        crimson: ['"Crimson Text"', 'serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
