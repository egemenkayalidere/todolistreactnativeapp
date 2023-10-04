import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootPaths} from './paths/root.paths';

import {AppNavigator} from './AppNavigator';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen component={AppNavigator} name={RootPaths.App} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
