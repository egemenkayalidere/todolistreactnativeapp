import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ButtonProps} from './types';

const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  ${({
    backgroundColor,
    width,
    height,
    borderRadius,
    marginBottom,
    marginTop,
    opacity,
  }) => ({
    opacity,
    backgroundColor,
    marginBottom,
    marginTop,
    width,
    height,
    borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

export default StyledButton;
