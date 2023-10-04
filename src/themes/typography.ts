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
  h1: {
    fontSize: fontSizes['48'],
    lineHeight: lineHeights['56'],
    fontFamily: fontFamilies.bold,
  },
  h2: {
    fontSize: fontSizes['30'],
    lineHeight: lineHeights['36'],
    fontFamily: fontFamilies.bold,
  },
  h3: {
    fontSize: fontSizes['30'],
    lineHeight: lineHeights['36'],
    fontFamily: fontFamilies.regular,
  },
  h4: {
    fontSize: fontSizes['24'],
    lineHeight: lineHeights['28'],
    fontFamily: fontFamilies.bold,
  },
  h5: {
    fontSize: fontSizes['24'],
    lineHeight: lineHeights['28'],
    fontFamily: fontFamilies.regular,
  },
  h6: {
    fontSize: fontSizes['30'],
    lineHeight: lineHeights['36'],
    fontFamily: fontFamilies.medium,
  },
  title1: {
    fontSize: fontSizes['20'],
    lineHeight: lineHeights['24'],
    fontFamily: fontFamilies.bold,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: fontSizes['18'],
    lineHeight: lineHeights['22'],
    fontFamily: fontFamilies.bold,
  },
  title3: {
    fontSize: fontSizes['18'],
    lineHeight: lineHeights['22'],
    fontFamily: fontFamilies.regular,
  },
  body1: {
    fontSize: fontSizes['16'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.bold,
  },
  body2: {
    fontSize: fontSizes['16'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.semiBold,
  },
  body3: {
    fontSize: fontSizes['16'],
    lineHeight: lineHeights['20'],
    fontFamily: fontFamilies.regular,
  },
  body4: {
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['18'],
    fontFamily: fontFamilies.bold,
  },
  body5: {
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['22'],
    fontFamily: fontFamilies.medium,
  },
  body6: {
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['22'],
    fontFamily: fontFamilies.regular,
  },
  footNoteBold: {
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    fontFamily: fontFamilies.bold,
  },
  footNoteRegular: {
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    fontFamily: fontFamilies.regular,
  },
  footNoteMedium: {
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['14'],
    fontFamily: fontFamilies.medium,
  },
};

export type TypographyKeys = keyof typeof typography;

export default typography;
