/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AuthProvider } from '~/context/AuthContext';
import MainNavigator from '~/navigation/MainNavigator';




function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <MainNavigator/>
    </AuthProvider>
  );    
}

export default App;
