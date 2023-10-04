import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'styled-components';

const TaskDetails = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{color: theme.colors.error}}>TaskDetails</Text>
    </View>
  );
};

export default TaskDetails;
