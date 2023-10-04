import React, {FC} from 'react';
import {ViewProps} from 'react-native';

import StyledScreenView from './styles';
const ScreenView: FC<ViewProps> = ({children}) => {
  return <StyledScreenView>{children}</StyledScreenView>;
};

export default ScreenView;
