/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#241B3A',
        'ink-soft': '#3A2D57',
        flare: '#FF7A45',
        'flare-dark': '#E8632F',
        'flare-ink': '#C4471A',
        slate: '#57506B',
        mist: '#F5F3F7'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
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
