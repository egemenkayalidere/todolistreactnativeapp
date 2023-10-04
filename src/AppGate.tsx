/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './themes/theme';
import {ErrorBoundary} from 'react-error-boundary';
import {AuthNavigator} from './navigation/AuthNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={() => <View />}>
          <AuthNavigator />
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
