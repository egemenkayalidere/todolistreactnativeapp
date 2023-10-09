/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {ButtonProps} from './types';
import StyledButton from './styles';
import Text from '../Text';

const Button: FC<ButtonProps> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  textColor,
  text,
  variant,
  marginBottom,
  marginTop,
  onPress,
  disabled,
  opacity,
}) => {
  return (
    <StyledButton
      opacity={opacity}
      disabled={disabled}
      onPress={onPress}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      marginBottom={marginBottom}
      marginTop={marginTop}>
      <Text color={textColor} label={text} variant={variant} />
    </StyledButton>
  );
};

export default Button;
