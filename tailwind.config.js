/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pulpa: {
          hotpink: '#FF2E93',
          navy: '#161124',
          footer: '#1A162B',
          yellow: '#FFEA00',
          blue: '#3A60FF',
          mint: '#00FF85',
          peach: '#FFE9D6',
          periwinkle: '#D5E1FF',
          softmint: '#B5F2C3',
        }
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        space: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px #161124',
        'neo': '4px 4px 0px #161124',
        'neo-lg': '8px 8px 0px #161124',
      },
      transitionProperty: {
        'neo': 'transform, box-shadow',
      }
    },
  },
  plugins: [],
}
