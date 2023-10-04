import {Text as RNText} from 'react-native';
import styled from 'styled-components/native';

import {StyledTextProps} from './tpyes';

export const StyledText = styled(RNText)<StyledTextProps>`
  ${({theme, variant, color}) => ({
    color: theme.colors[color ?? 'darkGrey'],
    ...theme.typography[variant],
  })};
`;
