import {
  isSmallDevice,
  isSmallDeviceW,
  screenHeight,
  screenWidth,
} from './../utils/device.utils';
import {
  normalizeSize,
  setSpaceBetweenTwoElements,
} from './../utils/responsive.utils';

import typography from './typography';

const colors = {
  primary: '#11A09A',
  secondary: '#FE7A7B',
  white: '#FFFFFF',
  grey: '#F4F4F4',
  lightGrey: '#E9E9E9',
  midGrey: '#818181',
  darkGrey: '#2D2D2D',
  success: '#3AC635',
  error: '#FF445A',
  warning: '#FFB200',
  info: '#879BFF',
  overlay: 'rgba(255, 255, 255, .6)',
  placeholder: '#BFBFBF',
};

const padding = {
  xxl: 128,
  xl: 64,
  l: 32,
  m: 16,
  s: 8,
};

const margin = {
  xxl: 128,
  xl: 64,
  l: 32,
  m: 16,
  s: 8,
};

const dimensions = {
  screenWidth,
  screenHeight,
  isSmallDevice,
  isSmallDeviceW,
};

export const theme = {
  colors,
  typography,
  padding,
  margin,
  dimensions,
  setSpaceBetweenTwoElements,
  normalizeSize,
};

export type ColorKeys = keyof typeof colors;
export type TypographyKeys = keyof typeof typography;

export interface Theme {
  colors: typeof colors;
  typography: typeof typography;
  padding: typeof padding;
  margin: typeof margin;
  dimensions: typeof dimensions;
  normalizeSize: typeof normalizeSize;
  setSpaceBetweenTwoElements: typeof setSpaceBetweenTwoElements;
}
