module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {

      'color-F7F7F7': '#F7F7F7',
      'color-274D79': '#274D79',
      'color-DDF0EA': '#DDF0EA',
      'color-508e7b': '#508e7b',
      'color-123228': '#123228',
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '19rem',
    },
    screens: {
      xs: '416px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    fontFamily: {
      'titling': [
        'titling-gothic-fb-wide',
        'sans-serif',
      ],
      'ibm-conds': [
        'ibm-plex-sans-condensed',
        'sans-serif',
      ],
      'ibm-mono': [
        'ibm-plex-mono',
        'monospace',
      ],
    },
    fontSize: {
      '2xs': '.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4halfxl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    minWidth: {
      '0': '0',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    padding: theme => theme('spacing'),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      'min1': "-1",
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    fill: {
      current: 'currentColor',
    },
    stroke: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    inset: {
      '0': '0',
      auto: 'auto',
    },
    container: {}
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive', 'hover'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    order: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
