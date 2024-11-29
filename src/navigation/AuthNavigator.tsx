import React from 'react';

import LoginScreen from '~/screens/Auth/LoginScreen';
import RegisterScreen from '~/screens/Auth/RegisterScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
      <Tab.Navigator initialRouteName="Login"
      
        screenOptions={{
          tabBarActiveTintColor: '#00aa82', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
          tabBarStyle: {
            backgroundColor: '#fff', // Tab bar background color
          },
        }}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <Icon name="sign-in" size={size} color={color} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-plus" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default AuthNavigator;
