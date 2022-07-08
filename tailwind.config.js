// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/defaultTheme')

const BASE_FONT_SIZE = 16

const pxToRem = (px, base) => `${px / base}rem`

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx',
      './utils/**/*.ts',
      './styles/**/*.scss'
    ],
    options: {
      blocklist: ['test.tsx']
    }
  },
  darkMode: false,
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      1: pxToRem(4, BASE_FONT_SIZE),
      2: pxToRem(8, BASE_FONT_SIZE),
      3: pxToRem(12, BASE_FONT_SIZE),
      4: pxToRem(16, BASE_FONT_SIZE),
      5: pxToRem(20, BASE_FONT_SIZE),
      6: pxToRem(24, BASE_FONT_SIZE),
      7: pxToRem(28, BASE_FONT_SIZE),
      8: pxToRem(32, BASE_FONT_SIZE),
      9: pxToRem(36, BASE_FONT_SIZE),
      10: pxToRem(40, BASE_FONT_SIZE),
      11: pxToRem(44, BASE_FONT_SIZE),
      12: pxToRem(48, BASE_FONT_SIZE),
      13: pxToRem(52, BASE_FONT_SIZE),
      14: pxToRem(56, BASE_FONT_SIZE),
      15: pxToRem(60, BASE_FONT_SIZE),
      16: pxToRem(64, BASE_FONT_SIZE),
      17: pxToRem(68, BASE_FONT_SIZE),
      18: pxToRem(72, BASE_FONT_SIZE),
      19: pxToRem(76, BASE_FONT_SIZE),
      20: pxToRem(80, BASE_FONT_SIZE),
      21: pxToRem(84, BASE_FONT_SIZE),
      22: pxToRem(88, BASE_FONT_SIZE),
      23: pxToRem(92, BASE_FONT_SIZE),
      24: pxToRem(96, BASE_FONT_SIZE),
      25: pxToRem(100, BASE_FONT_SIZE),
      26: pxToRem(104, BASE_FONT_SIZE),
      27: pxToRem(108, BASE_FONT_SIZE),
      28: pxToRem(112, BASE_FONT_SIZE),
      29: pxToRem(116, BASE_FONT_SIZE),
      30: pxToRem(120, BASE_FONT_SIZE),
      31: pxToRem(124, BASE_FONT_SIZE),
      32: pxToRem(128, BASE_FONT_SIZE)
    },
    colors: {
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      danger: {
        lighter: '#fdbbbb',
        DEFAULT: '#dc3545',
        dark: '#a14646'
      },
      transparent: colors.transparent,
      primary: {
        lighter: '#f96e43',
        DEFAULT: '#f05423',
        dark: '#cd3b0e'
      },
      secondary: {
        lighter: '#c32865',
        DEFAULT: '#272727',
        dark: '#0A1134'
      },
      gray: {
        1: '#8c8fa0',
        2: '#dadada',
        3: '#6a6a6a',
        4: '#e7e7e7',
        5: '#f8f8f8',
        6: '#555',
        7: '#1d2838'
      }
    },
    fontSize: {
      xs: ['12px', '15px'],
      sm: ['14px', '17px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '42px'],
      '3xl': ['40px', '52px'],
      '4xl': ['56px', '72px'],
      '5xl': ['64px', '96px']
    },
    stroke: (theme) => ({
      white: theme('colors.white'),
      black: theme('colors.black'),
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary')
    }),
    fill: (theme) => ({
      white: theme('colors.white'),
      black: theme('colors.black'),
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary')
    }),
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Frank Ruhl Libre', 'serif']
    },
    borderRadius: {
      none: 0,
      sm: pxToRem(4, BASE_FONT_SIZE),
      DEFAULT: pxToRem(8, BASE_FONT_SIZE),
      md: pxToRem(12, BASE_FONT_SIZE),
      lg: pxToRem(16, BASE_FONT_SIZE),
      xl: pxToRem(20, BASE_FONT_SIZE),
      '2xl': pxToRem(24, BASE_FONT_SIZE),
      full: '50%'
    },
    boxShadow: {
      sm: '0 5px 5px rgba(0, 0, 0, .04)',
      DEFAULT: '0 5px 10px rgba(0, 0, 0, .04)',
      md: '0 5px 15px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 5px 20px rgba(0, 0, 0, .4)',
      none: 'none'
    }
  },
  variants: {
    border: ['focus', 'active', 'hover'],
    boxShadow: ['focus', 'active', 'hover'],
    extend: {
      animation: ['motion-reduce'],
      translate: ['focus-within']
    }
  },
  plugins: []
}
