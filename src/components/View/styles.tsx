import {View} from 'react-native';
import styled from 'styled-components';
import {ViewProps} from './types';

export const StyledView = styled(View)<ViewProps>`
  ${({height, width}) => ({
    height,
    width,
    justifyContent: 'center',
    alignItems: 'left',
  })}
`;
