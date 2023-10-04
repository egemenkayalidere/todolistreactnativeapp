import React, {FC} from 'react';

import {StyledText} from './styles';
import {ColorKeys} from '../../themes/theme';
import {TypographyKeys} from '../../themes/typography';
import {TextStyle} from 'react-native';

const Text: FC<{
  label: string;
  color?: ColorKeys;
  variant?: TypographyKeys;
  style?: TextStyle;
}> = ({label, color, variant, ...rest}) => {
  return (
    <StyledText variant={variant} color={color} {...rest}>
      {label}
    </StyledText>
  );
};

export default Text;
