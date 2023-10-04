import {View} from 'react-native';
import styled from 'styled-components/native';

const StyledFlexView = styled(View)<{
  flex: number;
  justifyContent: string;
  alignItems: string;
  paddingHorizontal: number;
}>`
  ${({flex, justifyContent, alignItems, paddingHorizontal}) => ({
    flex,
    justifyContent,
    alignItems,
    paddingHorizontal,
  })}
`;

export default StyledFlexView;
