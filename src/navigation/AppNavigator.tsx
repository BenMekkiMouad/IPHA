import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MapsScreen from '~/screens/Maps/MapsScreen';
import NotifScreen from '~/screens/Notif/NotifScreen';
import OrdersScreen from '~/screens/Orders/OrdersScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '~/screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Icon name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notif"
        component={NotifScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Notif',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
