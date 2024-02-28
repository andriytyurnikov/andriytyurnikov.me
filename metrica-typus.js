const plugin = require('tailwindcss/plugin')

module.exports =
  // prefix: 'metrica-',
  // important: true,
  plugin(
    function({ addUtilities, matchUtilities, theme }) {
      addUtilities(
        {
          ".metrica-cap-sized": {
            "--metrica-font-size": "calc( var(--metrica-cap-size)/var(--metrica-precomputed-cap-height-scale) )",
            "font-size": "calc(var(--metrica-font-size) * 1rem)"
          }
        }
      )

      matchUtilities(
        {
          'metrica-cap-size-rem': (value, { modifier }) => {
            return {
              '--metrica-cap-size': `calc(${value})`,
              '@apply metrica-cap-sized': {},
              'font-size': `calc(var(--metrica-font-size) * 1rem)`
            }
          },

          'metrica-leading-rem': (value, { modifier }) => {
            return {
              '--metrica-line-height': `calc(${value})`,
              'line-height': 'calc( var(--metrica-line-height) * 1rem)'
            }
          },
        }
      )
    }
  )