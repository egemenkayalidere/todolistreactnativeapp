import {View} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../themes/theme';

const StyledScreenView = styled(View)`
  ${() => ({
    backgroundColor: theme.colors.white,
    height: '100%',
    width: '100%',
  })}
`;

export default StyledScreenView;
