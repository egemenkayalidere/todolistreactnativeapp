import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'styled-components';

const Home = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{color: theme.colors.error}}>Home</Text>
    </View>
  );
};

export default Home;
