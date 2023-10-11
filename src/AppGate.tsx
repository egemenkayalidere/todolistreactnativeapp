/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes/theme';
import {ErrorBoundary} from 'react-error-boundary';
import {RootNavigator} from './navigation';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      global.internetConnection = state;
    });

    // Unsubscribe to avoid memory leaks
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar />
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={() => <View />}>
          <RootNavigator />
        </ErrorBoundary>
      </ThemeProvider>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
