/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        evri: {
          blue: '#002D72',          // Official Evri Deep Corporate Blue from evri.com
          'blue-dark': '#001D4A',
          navy: '#0A1D33',
          teal: '#2DC5B8',
          gray: '#4A4A4A',
          light: '#F8F9FA'
        },
        ink: '#0A1D33',
        'ink-soft': '#001D4A',
        flare: '#002D72',
        'flare-dark': '#001D4A',
        'flare-ink': '#002D72',
        slate: '#4A4A4A',
        mist: '#F8F9FA'
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        card: '1.5rem',
        panel: '2rem'
      },
      maxWidth: {
        shell: '80rem'
      }
    }
  },
  plugins: []
}
