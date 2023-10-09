import React, {FC} from 'react';
import {StyledView} from './styles';
import {ViewProps} from './types';

const View: FC<ViewProps> = ({
  children,
  height,
  width,
  marginTop,
  flexDirection,
  justifyContent,
  position,
  bottom,
  backgroundColor,
  borderRadius,
  alignItems,
  paddingVertical,
  marginRight,
  borderWidth,
  marginBottom,
  paddingHorizontal,
  alignSelf,
}) => {
  return (
    <StyledView
      alignSelf={alignSelf}
      paddingHorizontal={paddingHorizontal}
      marginBottom={marginBottom}
      borderWidth={borderWidth}
      marginRight={marginRight}
      paddingVertical={paddingVertical}
      alignItems={alignItems}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      bottom={bottom}
      position={position}
      justifyContent={justifyContent}
      height={height}
      width={width}
      marginTop={marginTop}
      flexDirection={flexDirection}>
      {children}
    </StyledView>
  );
};

export default View;
