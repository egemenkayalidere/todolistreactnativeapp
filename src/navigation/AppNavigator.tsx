import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabNavigator} from './TabNavigator';
import {AppPaths} from './paths/app.paths';
import CreateTask from '../screens/TabNavScreens/CreateTask';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group screenOptions={{headerShown: false}}>
        <AppStack.Screen component={TabNavigator} name={AppPaths.Home} />
        <AppStack.Screen component={CreateTask} name={AppPaths.CreateTask} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
