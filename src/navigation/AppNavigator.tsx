import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '~/screens/Home/HomeScreen';
import LoginScreen from '~/screens/Auth/LoginScreen';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator