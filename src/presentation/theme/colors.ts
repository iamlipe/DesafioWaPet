const COLORS = {
  white: '#fff',
  black: '#000',

  gray: {
    900: '#333333',
    800: '#4C4C4C',
    700: '#666666',
    600: '#7F7F7F',
    500: '#999999',
    400: '#B3B3B3',
    300: '#CCCCCC',
    200: '#E5E5E5',
    100: '#F2F2F2',
    50: '#F9F9F9',
  },

  primary: {
    900: '#af3c50',
    800: '#c8455b',
    700: '#e14d67',
    600: '#e14d67',
    500: '#fa5672',
    400: '#fb6780',
    300: '#fb788e',
    200: '#fc899c',
    100: '#fc9aaa',
  },

  status: {
    warning: '#F3DA4A',
    error: '#C41826',
    success: '#009D35',
    info: '#417FFA',
  },
};

export type COLOR_TYPE = typeof COLORS;

export default COLORS;
