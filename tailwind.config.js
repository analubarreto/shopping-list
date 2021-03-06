const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      // font-body
      body: ['Source Sans Pro'],
      // font-title
      title: ['Montserrat']
    },
    extend: {
      colors: {
        brown: {
          dark: '#615346',
          DEFAULT: '#8f7b69',
          light: '#dec9bc'
        },
        green: {
          DEFAULT: '#589431',
        },
        red: {
          dark: '#ed7459',
          DEFAULT: '#F5B2A3',
          light: '#fffee5',
        },
        gray: {
          light: '#CDCDCD',
          DEFAULT: '#404040',
        },
        white: {
          DEFAULT: '#ffffff'
        }
      },
    }
  },
  variants: {
    extend: {
      textColor: ['visited']
    }
  },
  extend: {
    borderRadius: {
      'sm': '0.313rem',
      'md': '0.625rem'
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};