import {normalizeSize} from './../utils/responsive.utils';

const fontFamilies = {
  bold: 'Montserrat-Bold',
  semiBold: 'Montserrat-SemiBold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
};

const fontSizes = {
  '48': normalizeSize(48),
  '30': normalizeSize(30),
  '24': normalizeSize(24),
  '20': normalizeSize(20),
  '18': normalizeSize(18),
  '16': normalizeSize(16),
  '14': normalizeSize(14),
  '12': normalizeSize(12),
};

const lineHeights = {
  '56': `${normalizeSize(56)}px`,
  '36': `${normalizeSize(36)}px`,
  '28': `${normalizeSize(28)}px`,
  '24': `${normalizeSize(24)}px`,
  '22': `${normalizeSize(22)}px`,
  '20': `${normalizeSize(20)}px`,
  '18': `${normalizeSize(18)}px`,
  '16': `${normalizeSize(16)}px`,
  '14': `${normalizeSize(14)}px`,
  '12': `${normalizeSize(12)}px`,
};

const typography = {
  title1: {
    fontSize: fontSizes['20'],
    lineHeight: lineHeights['20'],
    fontWeight: 'bold',
    fontFamily: fontFamilies.regular,
  },
  title2: {
    fontSize: fontSizes['18'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.regular,
  },
  body1: {
    fontSize: fontSizes['16'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.regular,
  },
  body2: {
    fontSize: fontSizes['16'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.regular,
  },
  button1: {
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    fontWeight: 'bold',
    fontFamily: fontFamilies.regular,
  },
};

export type TypographyKeys = keyof typeof typography;

export default typography;
