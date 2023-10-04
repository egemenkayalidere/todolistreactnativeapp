import {PixelRatio} from 'react-native';

import {screenHeight, screenWidth} from './device.utils';

import {BASE_RESPONSIVE_DIMENSIONS} from './../common/configs';

function normalizeSize(size: number) {
  const calculatedSize =
    (size / BASE_RESPONSIVE_DIMENSIONS.WIDTH) * screenWidth;

  return Math.round(PixelRatio.roundToNearestPixel(calculatedSize));
}

function setSpaceBetweenTwoElements(size: number) {
  const calculatedSize =
    (size / BASE_RESPONSIVE_DIMENSIONS.HEIGHT) * screenHeight;

  return Math.round(PixelRatio.roundToNearestPixel(calculatedSize));
}

export {normalizeSize, setSpaceBetweenTwoElements};
