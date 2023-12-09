const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    /** Can not use extend: for custom small breakpoints, as  */
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
      '3xl': '2048px',
    },
    extend: {
      animation: {
        'spin-once': 'spin 0.25s ease-in-out 1',
      },
      colors: {
        inferno: {
           50: '#fcffa4',
          100: '#f1ec6d',
          200: '#fbb61a',
          300: '#f68013',
          400: '#e05536',
          500: '#bc3754',
          600: '#8f2469',
          700: '#62146e',
          800: '#320a5e',
          900: '#09061f',
          950: '#000004'
        },
        magma: {
           50: '#fcfdbf',
          100: '#fde3a5',
          200: '#feb078',
          300: '#f9795d',
          400: '#e24d66',
          500: '#b73779',
          600: '#882781',
          700: '#5c167f',
          800: '#2c115f',
          900: '#08071e',
          950: '#000004'
        },
        plasma: {
           50: '#f0f921',
          100: '#f8e125',
          200: '#fdb42f',
          300: '#f58b47',
          400: '#e3685f',
          500: '#cc4778',
          600: '#ad2793',
          700: '#8808a6',
          800: '#5c01a6',
          900: '#2e0595',
          950: '#0d0887'
        },
        viridis: {
           50: '#fde725',
          100: '#dae319',
          200: '#90d743',
          300: '#4ec36b',
          400: '#25ab82',
          500: '#21918c',
          600: '#2b758e',
          700: '#375a8c',
          800: '#443983',
          900: '#481668',
          950: '#440154'
        },
        vt320: {
          'amber': '#ffb000',
          'amber-light': '#ffcc00',
          'green-one': '#33ff00',
          'green-two': '#00ff33',
          'green-three': '#00ff66',
          'grey': '#282828',
        },
      },
      fontFamily: {
        'berkeley-mono': ['Berkeley Mono Variable', 'sans-serif'],
        'noto-sans-display': ['Noto Sans Display', 'sans-serif'],
        'noto-sans-mono': ['Noto Sans Mono', 'sans-serif'],
        'space-mono': ['Space Mono', 'sans-serif']
      },
      fontMetrics: {
        berkeley: {
          capHeight: 680,
          ascent: 956,
          descent: -244,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 522,
          xWidthAvg: 600,
        },
        'noto-sans-mono': {
          familyName: 'Noto Sans Mono',
          capHeight: 714,
          ascent: 1069,
          descent: -293,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 536,
          xWidthAvg: 600
        },
        'noto-sans-display': {
          capHeight: 714,
          ascent: 1069,
          descent: -293,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 536,
          xWidthAvg: 445,
        },
        prata: {
          capHeight: 800,
          ascent: 993,
          descent: -362,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 533,
          xWidthAvg: 0,
        },
        'space-mono': {
          capHeight: 700,
          ascent: 1120,
          descent: -361,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 496,
          xWidthAvg: 612,
        },
        verdana: {
          capHeight: 1489,
          ascent: 2059,
          descent: -430,
          lineGap: 0,
          unitsPerEm: 2048,
          xHeight: 1117,
          xWidthAvg: 0,
        },
      },
      maxWidth: {
        '20/1': '20rem',
        '40/1': '40rem',
      },
      spacing: {
        'unset': 'unset',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
    require('@rubakas/fractio-rem'),
    require('@rubakas/pro-rata-rem'),
    // require('./src/lib/metrica.js'),
    // require('./src/lib/canon.js')
  ],
}

