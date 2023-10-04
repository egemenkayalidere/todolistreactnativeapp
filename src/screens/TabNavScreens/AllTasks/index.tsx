import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'styled-components';

const AllTasks = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{color: theme.colors.error}}>AllTasks</Text>
    </View>
  );
};

export default AllTasks;
