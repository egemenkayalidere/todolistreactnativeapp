import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/AuthNavScreens/Onboarding';
import Login from '../screens/AuthNavScreens/Login';
import Register from '../screens/AuthNavScreens/Register';
import {AuthPaths} from './paths/auth.paths';
import {NavigationContainer} from '@react-navigation/native';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Group screenOptions={{headerShown: false}}>
          <AuthStack.Screen
            component={Onboarding}
            name={AuthPaths.Onboarding}
          />
          <AuthStack.Screen component={Login} name={AuthPaths.Login} />
          <AuthStack.Screen component={Register} name={AuthPaths.Register} />
        </AuthStack.Group>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
