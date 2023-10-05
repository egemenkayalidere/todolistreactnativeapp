import {TypographyKeys} from '../../themes/typography';

export interface ButtonProps {
  width: number | string;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  textColor: string;
  text: string;
  marginBottom?: number;
  variant: TypographyKeys;
  marginTop?: number;
  onPress: () => void;
}
