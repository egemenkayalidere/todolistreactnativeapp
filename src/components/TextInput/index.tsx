import React, {FC} from 'react';
import {TextInputProps} from './types';
import StyledTextInput from './styles';

const TextInput: FC<TextInputProps> = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  secureTextEntry,
  multiline,
  numberOfLines,
  height,
  backgroundColor,
}) => {
  return (
    <StyledTextInput
      backgroundColor={backgroundColor}
      height={height}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
};

export default TextInput;
