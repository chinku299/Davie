/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        evri: {
          blue: '#0047BA',
          'blue-dark': '#003399',
          navy: '#0C1D30',
          teal: '#2DC5B8',
          gray: '#4A4A4A',
          light: '#F8F9FA'
        },
        ink: '#0C1D30',
        'ink-soft': '#002D50',
        flare: '#0047BA',
        'flare-dark': '#003399',
        'flare-ink': '#0047BA',
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
