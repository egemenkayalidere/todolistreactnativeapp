import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootPaths} from './paths/root.paths';

import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {AuthPaths} from './paths/auth.paths';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  const {user} = useFirebaseAuth();
  console.log('user', user);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <RootStack.Screen component={AppNavigator} name={RootPaths.App} />
        ) : (
          <RootStack.Screen component={AuthNavigator} name={AuthPaths.Auth} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
