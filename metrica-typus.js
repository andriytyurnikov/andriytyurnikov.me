const plugin = require('tailwindcss/plugin')

module.exports =
  // prefix: 'metrica-',
  // important: true,
  plugin(
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'metrica-cap-size-rem': (value, { modifier }) => {
            return {
              '--metrica-cap-size': `calc(${value})`,
              'font-size': `calc(var(--metrica-font-size) * 1rem)`
            }
          },

          'metrica-leading-rem': (value, { modifier }) => {
            return {
              '--metrica-line-height': `calc(${value})`,
              'line-height': 'calc( var(--metrica-line-height) * 1rem)'
            }
          },
        },
      )
    }
  )