import {Dimensions, Platform} from 'react-native';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

export const isSmallDevice = screenHeight < 700;

export const isSmallDeviceW = screenWidth < 376;

export const isIos = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';
