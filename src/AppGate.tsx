/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes/theme';
import {ErrorBoundary} from 'react-error-boundary';
import {RootNavigator} from './navigation';
import Toast from 'react-native-toast-message';

const App = () => {
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
