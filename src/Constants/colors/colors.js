const { freeze } = Object;

export const BLACK = freeze({
  _100: '#13161E',
});

export const GRAY = freeze({
  _1: '#202830',
  _2: '#404B58',
  _3: '#636D79',
  _6: '#E0E6EC',
  _7: '#F1F3F6',
});

export const WHITE = freeze({
  _100: '#FFFFFF',
});

export const COLORS = freeze({
  black: BLACK,
  gray: GRAY,
  white: WHITE,
});

export default COLORS;
