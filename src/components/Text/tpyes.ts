import {TextStyle} from 'react-native';
import {ColorKeys} from '../../themes/theme';
import {TypographyKeys} from '../../themes/typography';

export interface TextProps {
  color?: ColorKeys;
  variant: TypographyKeys;
  label: string;
  style?: TextStyle;
  textDecorationLine?: string;
}
