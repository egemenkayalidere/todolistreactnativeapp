import {Text as RNText} from 'react-native';
import styled from 'styled-components/native';

import {TextProps} from './tpyes';

export const StyledText = styled(RNText)<TextProps>`
  ${({theme, variant, color}) => ({
    color: theme.colors[color ?? 'darkGrey'],
    ...theme.typography[variant],
  })};
`;
