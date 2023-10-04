import React, {FC} from 'react';
import StyledFlexView from './styles';

const FlexView: FC<{
  children: React.ReactNode | undefined;
  flex: number;
  justifyContent?: string;
  alignItems?: string;
  pH?: number;
}> = ({children, flex, justifyContent, alignItems, pH}) => {
  return (
    <StyledFlexView
      flex={flex}
      justifyContent={justifyContent}
      alignItems={alignItems}
      paddingHorizontal={pH}>
      {children}
    </StyledFlexView>
  );
};

export default FlexView;
