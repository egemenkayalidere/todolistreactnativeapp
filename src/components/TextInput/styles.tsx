import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {TextInputProps} from './types';

const StyledTextInput = styled(TextInput)<TextInputProps>`
  ${({height, backgroundColor}) => ({
    backgroundColor: backgroundColor ?? 'white',
    width: '100%',
    height: height ?? 55,
    borderRadius: 12,
    paddingLeft: 12,
  })}
`;

export default StyledTextInput;
