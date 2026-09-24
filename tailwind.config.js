/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        evri: {
          navy: '#001A31',
          teal: '#2DC5B8',
          'teal-dark': '#25a59a',
          gray: '#4A4A4A',
          light: '#F8F9FA'
        },
        ink: '#001A31',
        'ink-soft': '#002D50',
        flare: '#2DC5B8',
        'flare-dark': '#25a59a',
        'flare-ink': '#001A31',
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
