import React, {FC} from 'react';
import StyledFlexView from './styles';

const FlexView: FC<{
  children?: React.ReactNode | undefined;
  flex: number;
  justifyContent?: string;
  alignItems?: string;
  pH?: number;
  backgroundColor?: string;
}> = ({children, flex, justifyContent, alignItems, pH, backgroundColor}) => {
  return (
    <StyledFlexView
      backgroundColor={backgroundColor}
      flex={flex}
      justifyContent={justifyContent}
      alignItems={alignItems}
      paddingHorizontal={pH}>
      {children}
    </StyledFlexView>
  );
};

export default FlexView;
