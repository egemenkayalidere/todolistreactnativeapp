import React, {FC} from 'react';
import View from '../View';
import {theme} from '../../themes/theme';
import Text from '../Text';
import {Texts} from '../../common/enums';

const DashboardItem: FC<{label: keyof typeof Texts}> = ({label}) => {
  return (
    <View
      backgroundColor={theme.colors.white}
      marginTop={12}
      width={'20%'}
      height={75}
      borderRadius={12}
      justifyContent="center"
      alignItems="center">
      <Text label={Texts[label]} variant="body2Bold" />
      <Text label="0" variant="title2Bold" />
    </View>
  );
};

export default DashboardItem;
