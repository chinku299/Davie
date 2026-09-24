/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        evri: {
          blue: '#0052CC',          // Exact vibrant royal blue from evri.com banner & logo
          'blue-dark': '#003D99',
          navy: '#0A1D33',
          teal: '#2DC5B8',
          gray: '#4A4A4A',
          light: '#F8F9FA'
        },
        ink: '#0A1D33',
        'ink-soft': '#003D99',
        flare: '#0052CC',
        'flare-dark': '#003D99',
        'flare-ink': '#0052CC',
        slate: '#4A4A4A',
        mist: '#F8F9FA'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif']
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
