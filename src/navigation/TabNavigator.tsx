import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/TabNavScreens/Home';
import {TabPaths} from './paths/tab.paths';
import AllTasks from '../screens/TabNavScreens/AllTasks';

const TabStack = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{headerShown: false, tabBarStyle: {borderTopWidth: 0}}}>
      <TabStack.Screen
        component={Home}
        name={TabPaths.HomeTab}
        options={{
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <TabStack.Screen component={AllTasks} name={TabPaths.AllTasksTab} />
    </TabStack.Navigator>
  );
};
