import {View} from 'react-native';
import styled from 'styled-components';
import {ViewProps} from './types';

export const StyledView = styled(View)<ViewProps>`
  ${({height, width, justifyContent, alignItems, paddingVertical}) => ({
    height,
    width,
    justifyContent: justifyContent || 'center',
    alignItems,
    paddingVertical,
  })}
`;
