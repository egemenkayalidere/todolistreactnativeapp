import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabNavigator} from './TabNavigator';
import {AppPaths} from './paths/app.paths';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group screenOptions={{headerShown: false}}>
        <AppStack.Screen component={TabNavigator} name={AppPaths.Tab} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
