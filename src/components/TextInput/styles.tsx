import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {TextInputProps} from './types';

const StyledTextInput = styled(TextInput)<TextInputProps>`
  ${({theme}) => ({
    backgroundColor: theme.colors.lightGrey,
    width: '100%',
    height: 55,
    borderRadius: 12,
    paddingLeft: 12,
  })}
`;

export default StyledTextInput;
