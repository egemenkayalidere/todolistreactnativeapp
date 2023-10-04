import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/TabNavScreens/Home';
import {TabPaths} from './paths/tab.paths';
import AllTasks from '../screens/TabNavScreens/AllTasks';
import CreateTask from '../screens/TabNavScreens/CreateTask';

const TabStack = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen component={Home} name={TabPaths.HomeTab} />
      <TabStack.Screen component={CreateTask} name={TabPaths.CreateTask} />
      <TabStack.Screen component={AllTasks} name={TabPaths.AllTasksTab} />
    </TabStack.Navigator>
  );
};
