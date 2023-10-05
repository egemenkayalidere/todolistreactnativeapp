import React, {FC} from 'react';
import {StyledView} from './styles';
import {ViewProps} from './types';

const View: FC<ViewProps> = ({
  children,
  height,
  width,
  marginTop,
  flexDirection,
}) => {
  return (
    <StyledView
      height={height}
      width={width}
      marginTop={marginTop}
      flexDirection={flexDirection}>
      {children}
    </StyledView>
  );
};

export default View;
