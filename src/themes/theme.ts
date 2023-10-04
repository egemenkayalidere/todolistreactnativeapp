const colors = {
  primary: '#3787EB',
  white: '#FFFFFF',
  grey: '#F4F4F4',
  lightGrey: '#E9E9E9',
  midGrey: '#818181',
  darkGrey: '#2D2D2D',
  success: '#3AC635',
  error: '#FF445A',
  warning: '#FFB200',
  info: '#879BFF',
  overlay: 'rgba(45, 45, 45, .6)',
  placeholder: '#BFBFBF',
};

export const theme = {
  colors,
};

export interface Theme {
  colors: typeof colors;
}
