const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
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
          DEFAULT: '#ed7459',
          light: '#fffee5',
        },
        gray: {
          DEFAULT: '#404040',
        },
        white: {
          DEFAULT: '#ffffff'
        }
      },
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