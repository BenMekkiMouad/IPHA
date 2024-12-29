import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import HomeScreen from '~/screens/Home/HomeScreen';
import AuthNavigator from './AuthNavigator';
import { AuthContext } from '~/context/AuthContext';
import ForgotPassword from '~/screens/Auth/ForgotPassword';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

function MainNavigator() {

  const { user, loading } = useContext(AuthContext);
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth"> 
        <Stack.Screen name="App" component={AppNavigator} />
        {!user && (
          <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        )}
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator