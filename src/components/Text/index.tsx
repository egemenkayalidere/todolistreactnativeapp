import React, {FC} from 'react';
import {StyledText} from './styles';
import {TextProps} from './tpyes';

const Text: FC<TextProps> = ({label, color, variant, ...rest}) => {
  return (
    <StyledText variant={variant} color={color} {...rest}>
      {label}
    </StyledText>
  );
};

export default Text;
