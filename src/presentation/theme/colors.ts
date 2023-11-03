const COLORS = {
  white: '#fff',
  black: '#000',

  background: {
    900: '#f5f5f5',
    800: '#f9f9f9',
    700: '#fcfcfc',
    600: '#ffffff',
    500: '#fbfbfb',
    400: '#f7f7f7',
    300: '#f3f3f3',
    200: '#efefef',
    100: '#ebebeb',
  },

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
    900: '#5a29c4',
    800: '#672fd0',
    700: '#7035db',
    600: '#7d3be7',
    500: '#9146ff',
    400: '#a365ff',
    300: '#b67fff',
    200: '#c996ff',
    100: '#dab3ff',
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
