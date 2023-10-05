import React, {FC} from 'react';
import {TextInputProps} from './types';
import StyledTextInput from './styles';

const TextInput: FC<TextInputProps> = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <StyledTextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;
