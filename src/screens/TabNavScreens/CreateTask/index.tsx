import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'styled-components';

const CreateTask = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{color: theme.colors.error}}>CreateTask</Text>
    </View>
  );
};

export default CreateTask;
